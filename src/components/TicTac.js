import React from "react";
import Board from "./Board.js";

import "./TicTac.scss"

class TicTac extends React.Component {
    constructor(props) {
        super(props);
        //takes input squareSize or defaults to 3 by 3
        let squareSize = props.squareSize ? props.squareSize : 3
        this.state = {
            playerOne: "💜",
            playerTwo: "☕",
            currentPlayerOne: true,
            moveNumber: 0,
            squareSize: squareSize,
            history: [this.blankBoard(squareSize)],

        }
    }
    blankBoard(squareSize) {
        // makes a squareSize^2 board, in a 2-tensor.
        // Layer 1 is coulumns, with each entry being row
        // (x,y) board[x][y]
        // (col,row) => board[col][row]
        // 1,1  2,1  3,1
        // 1,2  2,2  3,2
        // 1,3  2,3  3,3

        let newBoard = Array(squareSize).fill(Array(squareSize).fill(null));
        return {
            squares: newBoard,
            currentTile: null,
            winner: null,
            // winningLine: null
        }

    }
    historyUpdate(newBoard, newestTile) {
        let currentHistory = this.state.history.slice();
        currentHistory.push({
            squares: newBoard,
            currentTile: newestTile,
            winner: this.calculateWinner(newBoard),
            // winningLine: null
        })
        this.setState({
            history: currentHistory,
        })
        // console.log("this")
        // console.log(this)
        // this.forceUpdate()

    }
    calculateWinner(currentBoardSquares) {
        return null;
    }
    boardRender() {
        const currentBoard = this.state.history[this.state.history.length - 1]
        console.log(this.state.history.length)
        // console.log(this.state.history[this.state.history.length - 1])
        return <Board
            currentBoard={currentBoard}
            handleClick={
                (c, r) => {
                    this.handleClick(c, r)
                }
            }
        />
    }
    handleClick(colIndex, rowIndex) {
        // history is an array of states the game was in.
        let currentBoard = this.state.history[this.state.history.length - 1]
        // history[i].squares is the state the squares were in then
        if (currentBoard.squares[colIndex][rowIndex]) {
            return
        } else {
            // alert("Nooooo!")
            let tempSquare = {
                content: "X",
                tileClass: "Tile-winner",
            }
            // splitting out the column, and replacing this tile (row) with new data
            let tempColumn = currentBoard.squares[colIndex].slice();
            tempColumn[rowIndex] = tempSquare;
            // splitting out the board (into columns) and inserting the new column
            let newBoardSquares = currentBoard.squares.slice()
            newBoardSquares[colIndex] = tempColumn;

            this.historyUpdate(newBoardSquares, [colIndex, rowIndex])
            return newBoardSquares[colIndex][rowIndex]
        }
    }
    controlsRender() {
        return <div>Here's where the controls should go.</div>
    }
    render() {
        return <div className="gameContainer">
            <div className="gameStatus">
                Hello, this is Tic-Tac-Toe.
            </div>
            <div className="gameBoard">
                {this.boardRender()}
            </div>
            <div className="gameControls">
                {this.controlsRender()}
            </div>
        </div>
    }
}
export default TicTac