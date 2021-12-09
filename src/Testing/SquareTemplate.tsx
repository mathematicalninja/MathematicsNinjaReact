// Square template

import React from "react";
import Board from "../components/games/gameParts/Board";
import HistoryControls from "../components/games/gameParts/HistoryControls";

export interface SquareGameProps {
  gridSize: [number, number];
  minimumDiagonal?: number;
  maximumDiagonal?: number;
}

interface BoardState {
  squares: any[];
  currentTile: any;
  winner: any;
  winningLine: any;
  moveList: any[];
}

export interface SquareGameState {
  playerLogos: (JSX.Element | string)[];
  currentPlayer: number;
  maxPlayers: number;
  moveNumber: number;
  gridSize: number[];
  history: BoardState[];
  winningLines: number[][][];
}

abstract class squareGame<
  P extends SquareGameProps,
  S extends SquareGameState,
> extends React.Component<SquareGameProps, SquareGameState> {
  // High Variance
  // lineMaker for the calculation of a winning position is most likely to be not-inheritable
  // Calculate winner may need to be changed for game style reasons (currently check content equality not a value)

  // Medium Variance
  // blankBoard has defaults baked in  that may need to be shifted
  // History update is fairly stable
  // change styling is a global default layout, but may need editing to shift away from "-current" and "-winning" styling depending on how the game looks

  // low Variance
  // handleClick, boardRender, and controls render are stable, as they call the less stable functions above.
  constructor(props) {
    super(props);
    //takes input gridSize or defaults to 3 by 3
    let gridSize = this.props.gridSize ? this.props.gridSize : [3, 3];
    this.state = {
      playerLogos: ["💜", "🦇", "☕"],
      currentPlayer: 0,
      maxPlayers: 2,
      moveNumber: 0,
      gridSize: gridSize,
      history: [this.blankBoard(gridSize)],
      winningLines: this.lineMakerParentAbstract(gridSize),
    };
  }

  blankBoard(gridSize: number[]) {
    // makes a gridSize board, in a 2-tensor.
    // Layer 1 is coulumns, with each entry being row
    // (x,y) board[x][y]
    // (col,row) => board[col][row]
    // 1,1  2,1  3,1
    // 1,2  2,2  3,2
    // 1,3  2,3  3,3

    let newBoard = Array(gridSize[0]).fill(Array(gridSize[1]).fill(null));
    return {
      squares: newBoard,
      currentTile: null,
      winner: null,
      winningLine: null,
      moveList: [],
    };
  }

  calculateWinner(squares) {
    for (
      let indexOfLine = 0;
      indexOfLine < this.state.winningLines.length;
      indexOfLine++
    ) {
      let thisLine = this.state.winningLines[indexOfLine];
      let x_0 = thisLine[0][0];
      let y_0 = thisLine[0][1];
      let a = squares[x_0][y_0] ? squares[x_0][y_0].content : null;
      if (a) {
        let count = 0;
        for (let k = 0; k < thisLine.length; k++) {
          let x = thisLine[k][0];
          let y = thisLine[k][1];
          let value = squares[x][y] ? squares[x][y].content : null;
          if (value === a) count++;
        }
        if (count === thisLine.length) {
          return [a, thisLine];
        }
      }
    }

    return [null, null];
  }

  historyUpdate(newBoard, newestTile) {
    let currentHistory = this.state.history.slice(0, this.state.moveNumber + 1);
    const currentMove = this.state.moveNumber;
    const [winner, winningLine] = this.calculateWinner(newBoard);

    // const previousMoves =
    // -----------------------------------------------------
    //
    // here I need to put in a "prev moves += current move" style update.
    // or re-factor currentMove to moveList (reverse ordered, so moveList[0] is the current)
    //
    // -----------------------------------------------------
    const newMoveList = this.state.history[
      this.state.moveNumber
    ].moveList.concat([newestTile]);
    const unstyledBoard = {
      squares: newBoard,
      currentTile: newestTile,
      winner: winner,
      winningLine: winningLine,
      moveList: newMoveList,
    };

    this.changeStyling(unstyledBoard);

    currentHistory.push(unstyledBoard);

    this.setState({
      history: currentHistory,
      moveNumber: currentMove + 1,
    });
  }

  changeStyling(currentBoardState) {
    // currnetly this mutates data rather than cloneing it.

    let styledBoard = currentBoardState;
    const previousMoves = currentBoardState.moveList;
    if (previousMoves) {
      for (let move of previousMoves) {
        if (styledBoard.squares[move[0]][move[1]]) {
          styledBoard.squares[move[0]][move[1]].tileClass = "Tile";
        }
      }

      for (let x = 0; x < styledBoard.squares.length; x++) {
        for (let y = 0; y < styledBoard.squares[x].length; y++) {
          if (styledBoard.squares[x][y]) {
            styledBoard.squares[x][y].tileClass = "Tile";
          }
        }
      }

      if (styledBoard.currentTile) {
        let [x, y] = styledBoard.currentTile;
        styledBoard.squares[x][y].tileClass = "Tile-current";
      }

      if (styledBoard.winningLine) {
        for (let [x, y] of styledBoard.winningLine) {
          styledBoard.squares[x][y].tileClass = "Tile-winner";
        }
      }
      return styledBoard;
    }
  }

  timeTravel(i) {
    // restyle here
    this.changeStyling(this.state.history[i]);
    this.setState({
      moveNumber: i,
    });
  }

  tileFull(colIndex, rowIndex) {
    let currentBoard = this.state.history[this.state.moveNumber];
    return currentBoard.squares[colIndex][rowIndex];
  }

  handleClick(colIndex, rowIndex) {
    // history is an array of states the game was in.
    let currentBoard = this.state.history[this.state.moveNumber];
    // history[i].squares is the state the squares were in then

    if (this.tileFull(colIndex, rowIndex)) {
      return;
    } else if (currentBoard.winner) {
      return;
    } else {
      let tempSquare = {
        content:
          this.state.playerLogos[this.state.moveNumber % this.state.maxPlayers],
        tileClass: "Tile",
      };
      // splitting out the column, and replacing this tile (row) with new data
      let tempColumn = currentBoard.squares[colIndex].slice();
      tempColumn[rowIndex] = tempSquare;
      // splitting out the board (into columns) and inserting the new column
      let newBoardSquares = currentBoard.squares.slice();
      newBoardSquares[colIndex] = tempColumn;

      this.historyUpdate(newBoardSquares, [colIndex, rowIndex]);

      return newBoardSquares[colIndex][rowIndex];
    }
  }

  boardRender() {
    const currentBoard = this.state.history[this.state.moveNumber];
    return (
      <Board
        currentBoard={currentBoard}
        handleClick={(c, r) => {
          this.handleClick(c, r);
        }}
      />
    );
  }

  controlsRender() {
    return (
      <HistoryControls
        history={this.state.history}
        timeTravel={(i) => this.timeTravel(i)}
      />
    );
  }

  render() {
    return (
      <div className="gameContainer">
        <div className="gameStatus">
          Next move:{" "}
          {
            this.state.playerLogos[
              this.state.moveNumber % this.state.maxPlayers
            ]
          }
        </div>
        <div className="gameBoard">{this.boardRender()}</div>
        <div className="gameControls">
          Rewind buttons.
          {this.controlsRender()}
        </div>
      </div>
    );
  }
}
