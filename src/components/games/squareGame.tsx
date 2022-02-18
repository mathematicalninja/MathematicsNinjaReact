import React from "react";
import Board from "./components/Board";
import HistoryControls from "./components/HistoryControls";

// import "./TicTac.scss";

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

export default abstract class squareGame<
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

  lineMakerParentAbstract(
    gridSize: number[],
    minLength?,
    maxLength?,
  ): number[][][] {
    // old implimentation still in tack---> needs to be refactored to gridSize =[x,y] widths

    // placeholder variable, to allow code to be tested
    // let gridSize = gridSize[0];

    // from here stems the flow of changes.

    const xWidth = gridSize[0];
    const yWidth = gridSize[1];
    // min(A, B)
    // is A < B ? Yes A: No B
    // (A<B)?A:B
    const minWidth = minLength ? minLength : xWidth < yWidth ? xWidth : yWidth;

    // maxWidth mat be unnessessery

    // max(A,B)
    // is A>B? Yes A: No B
    // (A>B)?A:B
    // const maxWidth = maxLength ? maxLength : (xWidth > yWidth) ? xWidth : yWidth

    // if the min digonal isn't set, it's assumed to be 3 (or 1,2 if the grid is stupid small)
    // if max diagonal length isn't set, it's assumed to be the shorter of width/height (as that's the longest a diagonal can be)
    minLength =
      typeof minLength !== "undefined"
        ? minLength
        : minWidth < 3
        ? minWidth
        : 3;
    maxLength = typeof maxLength !== "undefined" ? maxLength : minWidth;

    let winLines: number[][][] = [];
    // add rows
    for (let y = 0; y < yWidth; y++) {
      let winRow: number[][] = [];
      for (let x = 0; x < xWidth; x++) {
        winRow.push([x, y]);
      }
      winLines.push(winRow);
    }
    // add columns
    for (let x = 0; x < xWidth; x++) {
      let winColumn: number[][] = [];
      for (let y = 0; y < yWidth; y++) {
        winColumn.push([x, y]);
      }
      winLines.push(winColumn);
    }

    /*obolete code
        // add \diagonal
        // let diagOne = []
        // for (let k = 0; k < gridSize; k++) {
        //     diagOne.push([k, k])
        // }
        // winLines.push(diagOne)
        obsolete code*/

    // add minor \diagonals length>=3
    if (minWidth >= 3) {
      // d ranges between the minLength of a diagonal, and the minWidth of the grid
      // minWidth -d = length of this minor diagonal
      for (let d = minWidth - 3; d >= 3 - minWidth; d--) {
        let minorDiag: number[][] = [];

        for (let y = 0; y < yWidth; y++) {
          let tileIndex = y * (1 + gridSize[1]) + d;
          if (
            // doesn't go off of the left
            tileIndex >= y * gridSize[1] &&
            //doesn't go off of the right
            tileIndex < (y + 1) * gridSize[1]
          ) {
            minorDiag.push([tileIndex - y * gridSize[1], y]);
          }
        }
        winLines.push(minorDiag);
      }
    }

    // add /diagonal
    // let diagTwo = []
    // for (let k = 0; k < gridSize; k++) {
    //     diagTwo.push([(gridSize - k - 1), k])
    //     // diagTwo.push((gridSize - k - 1) + k * gridSize)
    // }
    // winLines.push(diagTwo)
    // add minor /diagonals length>=3
    if (gridSize[0] >= 3) {
      // d is the range of differences in size (between 3 and gridSize), so gridSize-d is the length of the minor diagonal
      for (let d = gridSize[0] - 3; d >= 3 - gridSize[0]; d--) {
        let minorDiag: number[][] = [];

        for (let y = 0; y < yWidth; y++) {
          let tileIndex = gridSize[0] - y - 1 + y * gridSize[0] + d;
          if (
            // doesn't go off of the left
            tileIndex >= y * gridSize[0] &&
            //doesn't go off of the right
            tileIndex < (y + 1) * gridSize[0]
          ) {
            minorDiag.push([tileIndex - y * gridSize[0], y]);
            // minorDiag.push(tileIndex)
          }
        }
        winLines.push(minorDiag);
      }
    }
    return winLines;
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
