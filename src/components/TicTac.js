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
        // 1,1  2,1  3,1
        // 1,2  2,2  3,2
        // 1,3  2,3  3,3

        let newBoard = Array(squareSize).fill(Array(squareSize).fill(null));
        return {
            squares: newBoard,
            currentTile: null,
            winner: null,
            winningLine: null
        }

    }
    historyUpdate(currentBoard) {

        let currentHistory = this.state.history.slice();
        currentHistory.push({
            squares: currentBoard,
            currentTile: "really really null",
            winner: null,
            winningLine: null
        })
        // console.log(currentHistory)
        this.setState({
            history: currentHistory,
        })
        // console.log(this.state)

    }
    calculateWinner(currentBoard) {
        return null;
    }
    boardRender() {
        // console.log(this.state)
        return <Board currentBoard={this.state.history[0]} />
    }
    controlsRender() {
        return <div>Here's where the controls should go.</div>
    }
    render() {
        return <div className="GameContainer">
            <div className="GameStatus">
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