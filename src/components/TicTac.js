import React from "react";
import Board from "./gameParts/Board.js";
import HistoryControls from "./gameParts/HistoryControls.js"

import "./TicTac.scss"

class TicTac extends React.Component {
    constructor(props) {
        super(props);
        //takes input squareSize or defaults to 3 by 3
        let squareSize = props.squareSize ? props.squareSize : 3
        this.state = {
            playerLogos: ["💜", "☕", "🦇"],
            currentPlayer: 0,
            maxPlayers: 2,
            moveNumber: 0,
            squareSize: squareSize,
            history: [this.blankBoard(squareSize)],
            winningLines: this.lineMaker(squareSize)
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
            winningLine: null,
            moveList: [],
        }

    }

    lineMaker(squareSize) {

        let winLines = []
        // add rows
        for (let y = 0; y < squareSize; y++) {
            let winRow = [];
            for (let x = 0; x < squareSize; x++) {
                winRow.push([x, y]);
            };
            winLines.push(winRow);
        };
        // add columns
        for (let x = 0; x < squareSize; x++) {
            let winColumn = [];
            for (let y = 0; y < squareSize; y++) {
                winColumn.push([x, y]);
            }
            winLines.push(winColumn);
        }
        // add \diagonal
        let diagOne = []
        for (let k = 0; k < squareSize; k++) {
            diagOne.push([k, k])
        }
        winLines.push(diagOne)



        // add minor \diagonals length>=3
        if (squareSize > 3) {
            // d is the range of differences in size (between 3 and squareSize), so squareSize-d is the length of the minor diagonal
            for (let d = squareSize - 3; d >= 3 - squareSize; d--) {
                let minorDiag = []

                for (let y = 0; y < squareSize; y++) {
                    let tileIndex = y * (1 + squareSize) + d
                    if (
                        // doesn't go off of the left
                        tileIndex >= y * squareSize
                        &&
                        //doesn't go off of the right
                        tileIndex < (y + 1) * squareSize
                    ) {
                        minorDiag.push([tileIndex - y * squareSize, y])
                    }
                }
                winLines.push(minorDiag)
            }
        }




        // add /diagonal
        let diagTwo = []
        for (let k = 0; k < squareSize; k++) {
            diagTwo.push([(squareSize - k - 1), k])
            // diagTwo.push((squareSize - k - 1) + k * squareSize)
        }
        winLines.push(diagTwo)
        // add minor /diagonals length>=3
        if (squareSize > 3) {
            // d is the range of differences in size (between 3 and squareSize), so squareSize-d is the length of the minor diagonal
            for (let d = squareSize - 3; d >= 3 - squareSize; d--) {
                let minorDiag = []

                for (let y = 0; y < squareSize; y++) {
                    let tileIndex = (squareSize - y - 1) + y * squareSize + d
                    if (
                        // doesn't go off of the left
                        tileIndex >= y * squareSize
                        &&
                        //doesn't go off of the right
                        tileIndex < (y + 1) * squareSize
                    ) {
                        minorDiag.push([tileIndex - y * squareSize, y])
                        // minorDiag.push(tileIndex)
                    }
                }
                winLines.push(minorDiag)
            }
        }

        return winLines
    }



    historyUpdate(newBoard, newestTile) {
        let currentHistory = this.state.history.slice(0, this.state.moveNumber + 1);
        const currentMove = this.state.moveNumber;
        const [winner, winningLine] = this.calculateWinner(newBoard) ? this.calculateWinner(newBoard) : [null, null]
        // const previousMoves =
        // -----------------------------------------------------
        //
        // here I need to put in a "prev moves += current move" style update.
        // or re-factor currentMove to moveList (reverse ordered, so moveList[0] is the current)
        //
        // -----------------------------------------------------
        const newMoveList = this.state.history[this.state.moveNumber].moveList.concat([newestTile])
        const unstyledBoard = {
            squares: newBoard,
            currentTile: newestTile,
            winner: winner,
            winningLine: winningLine,
            moveList: newMoveList,
        }
        let previousMoves = null;
        if (this.state.moveNumber) {
            previousMoves = this.state.history[this.state.moveNumber].moveList
        }

        this.changeStyling(unstyledBoard, previousMoves)

        currentHistory.push(unstyledBoard)

        this.setState({
            history: currentHistory,
            moveNumber: currentMove + 1
        })

    }

    changeStyling(currentBoard, previousMoves) {

        // currnetly this mutates data rather than cloneing it.


        let styledBoard = currentBoard;
        if (previousMoves) {
            for (let move of previousMoves) {
                if (
                    styledBoard.squares[move[0]][move[1]]
                ) {
                    styledBoard.squares[move[0]][move[1]].tileClass = "Tile"
                }
            }

            for (let x = 0; x < styledBoard.squares.length; x++) {
                for (let y = 0; y < styledBoard.squares[x].length; y++) {
                    if (styledBoard.squares[x][y]) {
                        styledBoard.squares[x][y].tileClass = "Tile"
                    }
                }
            }

            if (styledBoard.currentTile) {
                let [x, y] = styledBoard.currentTile
                styledBoard.squares[x][y].tileClass = "Tile-current"
            }

            if (styledBoard.winningLine) {
                for (let [x, y] of styledBoard.winningLine) {
                    styledBoard.squares[x][y].tileClass = "Tile-winner"
                }
            }
            return styledBoard
        }
    }
    calculateWinner(squares) {
        for (let indexOfLine = 0; indexOfLine < this.state.winningLines.length; indexOfLine++) {
            let thisLine = this.state.winningLines[indexOfLine]
            let x_0 = thisLine[0][0]
            let y_0 = thisLine[0][1]
            let a = squares[x_0][y_0] ? squares[x_0][y_0].content : null
            if (a) {
                let count = 0;
                for (let k = 0; k < thisLine.length; k++) {
                    let x = thisLine[k][0]
                    let y = thisLine[k][1]
                    let value = squares[x][y] ? squares[x][y].content : null
                    if (value === a)
                        count++
                }
                if (count === thisLine.length) {
                    return [a, thisLine]
                }
            }
        }

        return null
    }


    boardRender() {
        const currentBoard = this.state.history[this.state.moveNumber]
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
        let currentBoard = this.state.history[this.state.moveNumber]
        // history[i].squares is the state the squares were in then
        if (currentBoard.squares[colIndex][rowIndex]) {
            return
        } else if (currentBoard.winner) { return }
        else {
            let tempSquare = {
                content: this.state.playerLogos[this.state.moveNumber % this.state.maxPlayers],
                tileClass: "Tile",
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
    timeTravel(i) {
        // restyle here
        this.changeStyling(this.state.history[i], this.state.history[i].moveList)
        this.setState({
            moveNumber: i,
        })
    }
    controlsRender() {
        return <HistoryControls
            history={this.state.history}
            timeTravel={(i) => this.timeTravel(i)}
        />
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
                Rewind buttons.
                {this.controlsRender()}
            </div>
        </div>
    }
}
export default TicTac