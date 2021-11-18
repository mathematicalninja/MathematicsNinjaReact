import React from "react";

// import "./connectFour.scss";

import squareGame from "./squareGame";

import Disc from "./gameParts/Disc";

import type { SquareGameProps } from "./squareGame";
import type { SquareGameState } from "./squareGame";

type GridGameProps = SquareGameProps & {
  gridSize: number[];
  diags: number;
  xLens: number;
  yLens: number;
  shortest: boolean;
};

type GridGameState = SquareGameState & {
  TestProperty: string;
  playerLogos: (JSX.Element | string)[];
  currentPlayer: number;
  maxPlayers: number;
  moveNumber: number;
  gridSize: any;
  history: {
    squares: any[];
    currentTile: any;
    winner: any;
    winningLine: any;
    moveList: any[];
  }[];
  winningLines: any[];
  title: string;
};

// Type '{ TestProperty: string; playerLogos: JSX.Element[]; currentPlayer: number; maxPlayers: number; moveNumber: number; gridSize: number[]; history: { squares: any[]; currentTile: null; winner: null; winningLine: null; moveList: never[]; }[]; winningLines: number[][][]; title: string; }' is not assignable to type 'Readonly<SquareGameState>'.
//   Object literal may only specify known properties, and 'TestProperty' does not exist in type 'Readonly<SquareGameState>'.ts(2322)

// class GridGame<P, S> extends squareGame<GridGameProps, GridGameState> {
class GridGame extends squareGame<GridGameProps, GridGameState> {
  // class GridGame extends squareGame<GridGameProps, GridGameState> {
  constructor(props: GridGameProps) {
    super(props);
    //takes input gridSize or defaults to 3 by 3
    let gridSize = props.gridSize ? props.gridSize : [3, 3];
    let diags = props.diags;
    let xLens = props.xLens;
    let yLens = props.yLens;
    let shortest = props.shortest;
    let winningLines = this.lineMaker(gridSize, diags, xLens, yLens, shortest);
    this.state = {
      // TestProperty: "This is a test",
      playerLogos: [
        <Disc
          outerEdge="var(--Grey-0)"
          outerColour="var(--Vivids-0)"
          innerEdge="var(--Grey-0)"
          innerColour="var(--Vivids-1)"
          size={119}
        />,
        <Disc
          outerEdge="var(--Grey-0)"
          outerColour="var(--Vivids-2)"
          innerEdge="var(--Grey-0)"
          innerColour="var(--Vivids-3)"
          size={119}
        />,
        <Disc
          outerEdge="var(--Grey-0)"
          outerColour="var(--Vivids-4)"
          innerEdge="var(--Grey-0)"
          innerColour="var(--Vivids-5)"
          size={119}
        />,
        <Disc
          outerEdge="var(--Grey-0)"
          outerColour="var(--Vivids-6)"
          innerEdge="var(--Grey-0)"
          innerColour="var(--Vivids-7)"
          size={119}
        />,
      ],
      currentPlayer: 0,
      maxPlayers: 2,
      moveNumber: 0,
      gridSize: gridSize,
      history: [this.blankBoard(gridSize)],
      winningLines: winningLines,
      // title: "Connect 4",
    };
    // changes game history to winning lines
    // this.lineVisuals()
  }

  tileFull(colIndex, rowIndex) {
    let currentBoard = this.state.history[this.state.moveNumber];

    // Is this tile empty?
    // yes: return saying as much
    // else: check the column

    if (currentBoard.squares[colIndex][rowIndex]) {
      // if this tile is full: first check if the column is full.
      if (!(rowIndex === 0)) {
        this.handleClick(colIndex, 0);
      }
      // THEN return saying THIS tile is full.
      return true;
    }

    // if this is the bottom row, we return saying that this tile is empty

    if (this.state.gridSize[1] === rowIndex + 1) {
      // console.log("Bottom")
      return false;
    }

    // if the tile below is empty, we "click" there.
    // i.e. the tile moves down to that square.
    // otherwise, we say this tile is empty.
    // console.log(currentBoard.squares[colIndex], currentBoard.squares[colIndex][rowIndex + 1])
    if (currentBoard.squares[colIndex][rowIndex + 1]) {
      return false;
    } else {
      this.handleClick(colIndex, rowIndex + 1);
      return true;
    }

    // if (!currentBoard.squares[colIndex][rowIndex]) {
    //     console.log("testing here", this.state.gridSize[1], rowIndex)

    //     if () {
    //         return currentBoard.squares[colIndex][rowIndex]
    //     } else {
    //         return currentBoard.squares[colIndex][rowIndex + 1]

    //     }
    // }
  }

  lineMaker(gridSize, diags, xLens, yLens, shortest = true): number[][][] {
    // console.log("hre", {gridSize, diags, xLens, yLens, shortest})
    const min = (A, B) => {
      return A < B ? A : B;
    };
    const max = (A, B) => {
      return A > B ? A : B;
    };

    // gridSize = [xWidth, yWidth]
    // diags = [minLength, maxLength]
    // xlens = [minLength, maxLength]
    // yLens = [minLength, maxLength]

    // if any of the mins are greater than the length they fit into, no lines of that type will be made.
    // e.g. this can stop diags being made

    // added in logic that accounts for yMin > yMax as inputs
    diags = diags ? [min(diags[0], diags[1]), max(diags[0], diags[1])] : [3, 5];
    xLens = xLens ? [min(xLens[0], xLens[1]), max(xLens[0], xLens[1])] : [3, 5];
    yLens = yLens ? [min(yLens[0], yLens[1]), max(yLens[0], yLens[1])] : [3, 5];

    const [xWidth, yWidth] = gridSize;
    const [diagMin, diagMax] =
      diags[0] > min(xWidth, yWidth) ? [null, null] : [diags[0], diags[1]];

    const [xMin, xMax] =
      xLens[0] > xWidth ? [null, null] : [xLens[0], min(xLens[1], xWidth)];
    const [yMin, yMax] =
      yLens[0] > yWidth ? [null, null] : [yLens[0], min(yLens[1], yWidth)];

    // this is the return's initialisation
    let winLines: number[][][] = [];
    // mote that winlines is not a grid of collections of win-lines, but a merge of them, so it stays the same dimensionality

    // Loop over (x,y)
    for (let x = 0; x < xWidth; x++) {
      for (let y = 0; y < yWidth; y++) {
        let [spaceLeft, spaceRight, spaceBottom] = this.calculateSpaces({
          x,
          y,
          xWidth,
          yWidth,
        });

        if (spaceRight >= xMin) {
          winLines = winLines.concat(
            this.returnHorizontal(x, y, xMin, min(xMax, spaceRight), shortest),
          );
        }

        if (spaceBottom >= yMin) {
          winLines = winLines.concat(
            this.returnVertical(x, y, yMin, min(yMax, spaceBottom), shortest),
          );
        }

        if (spaceLeft >= diagMin && spaceBottom >= diagMin) {
          winLines = winLines.concat(
            this.returnLeftDiagonal(
              x,
              y,
              diagMin,
              min(min(diagMax, spaceBottom), spaceLeft),
              shortest,
            ),
          );
        }

        if (spaceRight >= diagMin && spaceBottom >= diagMin) {
          winLines = winLines.concat(
            this.returnRightDiagonal(
              x,
              y,
              diagMin,
              min(min(diagMax, spaceBottom), spaceRight),
              shortest,
            ),
          );
        }
      }
    }
    return winLines;
  }

  // calculate x_left, x_right distances to the edges, (including this tile)
  // Likewise y_bottom
  calculateSpaces({ x, y, xWidth, yWidth }) {
    // returns Left space, Right space, Down space
    return [x + 1, xWidth - x, yWidth - y];
  }

  // these return functions return |arrays| of |lines| of point |pairs|
  // if shortest is true, will only return the shortest line of each type from that point.
  // if shortest is false, will return every line from that point.

  // |=====================================================|
  returnHorizontal(x, y, xMin, maxLength, shortest) {
    // only need to return one line (the shortest)
    if (shortest) {
      maxLength = xMin;
    }

    // init
    let returnLines: number[][][] = [];

    // start at the min length of a line, go till the max
    for (let length = xMin; length <= maxLength; length++) {
      let thisLine: number[][] = [];
      // move the xIndex along the line
      for (let xIndex = x; xIndex < x + length; xIndex++) {
        // add the point to the line
        thisLine.push([xIndex, y]);
      }
      // add the line to the return vale, then move onto the next line (if there is one)
      returnLines.push(thisLine);
    }
    return returnLines;
  }

  returnVertical(x, y, yMin, maxLength, shortest) {
    // only need to return one line (the shortest)
    if (shortest) {
      maxLength = yMin;
    }

    // init
    let returnLines: number[][][] = [];

    // start at the min length of a line, go till the max
    for (let length = yMin; length <= maxLength; length++) {
      let thisLine: number[][] = [];
      // move the yIndex down the line
      for (let yIndex = y; yIndex < y + length; yIndex++) {
        // add the point to the line
        thisLine.push([x, yIndex]);
      }
      // add the line to the return vale, then move onto the next line (if there is one)
      returnLines.push(thisLine);
    }
    return returnLines;
  }

  returnLeftDiagonal(x, y, diagMin, maxLength, shortest) {
    // only need to return one line (the shortest)
    if (shortest) {
      maxLength = diagMin;
    }

    // init
    let returnLines: number[][][] = [];

    // start at the min length of a line, go till the max
    for (let length = diagMin; length <= maxLength; length++) {
      let thisLine: number[][] = [];
      // move the yIndex down the line
      for (let index = 0; index < length; index++) {
        // add the point to the line
        thisLine.push([x - index, y + index]);
      }
      // add the line to the return vale, then move onto the next line (if there is one)
      returnLines.push(thisLine);
    }
    return returnLines;
  }

  returnRightDiagonal(x, y, diagMin, maxLength, shortest) {
    // only need to return one line (the shortest)
    if (shortest) {
      maxLength = diagMin;
    }

    // init
    let returnLines: number[][][] = [];

    // start at the min length of a line, go till the max
    for (let length = diagMin; length <= maxLength; length++) {
      let thisLine: number[][] = [];
      // move the yIndex down the line
      for (let index = 0; index < length; index++) {
        // add the point to the line
        thisLine.push([x + index, y + index]);
      }
      // add the line to the return vale, then move onto the next line (if there is one)
      returnLines.push(thisLine);
    }
    return returnLines;
  }
  // |=====================================================|

  // used for showing the winning lines
  // TODO: there's a visual glitch in showing Vertical Lines
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
export default GridGame;
