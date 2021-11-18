// import React from "react";
// import Board from "../gameParts/Board.js";
// import HistoryControls from "../gameParts/HistoryControls.js"

// import "./connectFour.scss";

import squareGame, { SquareGameProps, SquareGameState } from "./squareGame";

interface ConnectFourProps extends SquareGameProps {
  gridSize: number[];
}
interface ConnectFourState extends SquareGameState {}

class ConnectFour extends squareGame<SquareGameProps, SquareGameState> {
  constructor(props) {
    super(props);
    //takes input gridSize or defaults to 3 by 3
    let gridSize = props.gridSize ? props.gridSize : [7, 6];
    this.state = {
      playerLogos: ["💜", "🦇", "☕"],
      currentPlayer: 0,
      maxPlayers: 2,
      moveNumber: 0,
      gridSize: gridSize,
      history: [this.blankBoard(gridSize)],
      winningLines: this.lineMakerParentAbstract(gridSize, 4, 4),
    };
    // changes game history to winning lines
    this.lineVisuals();
  }

  lineMakerParentAbstract(gridSize, minLength?: number, maxLength?: number) {
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

    /*
        need to implement min/max length for winlines
        along rows/columns only need to care about min as a 5line has a 3line in it
        */
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

    /* new implemetation:
        can do diags and horizontals and verticals in one loop, loop
        triple loop, looping over Y
                1) check if there's enough space to the right
                    1a) draw the Horizontal
                2) check if there's enough space below
                    2a) draw the vertical
                    2b) if (1) draw the down right diagonal
                3) check if there's enough space to the left
                    3a) draw the down left diag

            Variable shortcuts.
            when looping over Y, there is a side that Y is moving away from and a side Y is moving towards.
            so one of these start as false and changes true (if condition) so only needs to changed until it's true
            one starts as true and changes to false (unless condition) so only needs to check for change while true
            both only need to go into the x loop if they're true

            similar for when looping over x, just short cuts loop,


        layer 1):
            Exit if (minLength > maxWidth) as there can be no diagonals longer than the longer side.

            looping over:
                difference between maxLength and minLength
            i.e. a diag of length 3,4,5 are all allowed in a 5X5 connect four
            so d in [-2,-1,0,1,2]

        layer 2):
            loopin over Y
        */

    // add minor \diagonals length>=3
    if (minWidth >= 3) {
      // d ranges between the minLength of a diagonal, and the minWidth of the grid
      // minWidth -d = length of this minor diagonal
      for (let d = minWidth - 3; d >= 3 - minWidth; d--) {
        let minorDiag: number[][] = [];

        for (let y = 0; y < yWidth; y++) {
          let tileIndex = y * (1 + gridSize) + d;
          if (
            // doesn't go off of the left
            tileIndex >= y * gridSize &&
            //doesn't go off of the right
            tileIndex < (y + 1) * gridSize
          ) {
            minorDiag.push([tileIndex - y * gridSize, y]);
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
    if (gridSize >= 3) {
      // d is the range of differences in size (between 3 and gridSize), so gridSize-d is the length of the minor diagonal
      for (let d = gridSize - 3; d >= 3 - gridSize; d--) {
        let minorDiag: number[][] = [];

        for (let y = 0; y < yWidth; y++) {
          let tileIndex = gridSize - y - 1 + y * gridSize + d;
          if (
            // doesn't go off of the left
            tileIndex >= y * gridSize &&
            //doesn't go off of the right
            tileIndex < (y + 1) * gridSize
          ) {
            minorDiag.push([tileIndex - y * gridSize, y]);
            // minorDiag.push(tileIndex)
          }
        }
        winLines.push(minorDiag);
      }
    }
    return winLines;
  }

  // changeStyling(currentBoardState) {
  //     return currentBoardState
  // }

  // used for showing the winning lines
  lineVisuals() {
    let newHistory = this.state.history;
    // let T = 0
    for (let line of this.state.winningLines) {
      // T += 1
      // console.log(T)
      // console.log(line)

      let newBoard;
      newBoard = Array(this.state.gridSize[0]).fill(
        Array(this.state.gridSize[1]).fill(null),
      );
      const A = {
        squares: newBoard,
        currentTile: null,
        winner: true,
        winningLine: line,
        moveList: [],
      };

      A.squares = Array(this.state.gridSize[0]).fill(
        Array(this.state.gridSize[1]).fill(null),
      );
      // console.log("set to null at 0,0", A.squares[0][0])

      // A.statemoveList = []
      // console.log("A", A)
      // for (let i = 0; i < A.squares.length; i++) {
      //     for (let j = 0; j < A.squares[i].length; j++) {
      //         A.moveList.push([i, j])
      //         A.squares[i][j] = null
      //     }
      // }
      // console.log(A.squares)

      let X_array = Array(this.state.gridSize[0]).fill(
        Array(this.state.gridSize[1]).fill({
          // content: this.state.playerLogos[T % 2],
          content: "",
          tileClass: "Tile",
        }),
      );
      for (let i = 0; i < line.length; i++) {
        // console.log("should still be null at 0,0", A.squares[0][0])

        let x = line[i][0];
        let y = line[i][1];
        // console.log(x, y, A.squares[x][y])

        let Y_array = Array(this.state.gridSize[1]).fill({
          // content: this.state.playerLogos[T % 2],
          content: "",
          tileClass: "Tile",
        });

        Y_array[y] = {
          // content: this.state.playerLogos[T % 2],
          content: [x, y],
          tileClass: "Tile-winner",
        };
        X_array[x] = Y_array;
        // console.log("X_array", X_array)

        // console.log(A.squares)
        A.squares = X_array;
        // console.log(A.squares)
        // console.log("suddenly it's not null at 0,0", A.squares[0][0])

        // console.log("x,y", A.squares[x][y])
        // console.log("0,0", A.squares[0][0])
      }

      // console.log(A)

      newHistory.push(A);
    }

    // console.log(newHistory)
    return newHistory;
  }
}
export default ConnectFour;
