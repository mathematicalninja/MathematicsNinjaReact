import React from 'react';
import Board from "./Board.js";
import "./timeTravel.scss"
import "./Game.scss"


class Game extends React.Component {

    constructor(props) {
        super(props);
        const squareSize = this.props.sizeOfSquare
        const lineMaker = () => {
            let winLines = []
            // add rows
            for (let y = 0; y < squareSize; y++) {
                let winRow = [];
                for (let x = 0; x < squareSize; x++) {
                    winRow.push(y * squareSize + x);
                };
                winLines.push(winRow);
            };
            // add columns
            for (let x = 0; x < squareSize; x++) {
                let winColumn = [];
                for (let y = 0; y < squareSize; y++) {
                    winColumn.push(y * squareSize + x);
                }
                winLines.push(winColumn);
            }
            // add \diagonal
            let diagOne = []
            for (let k = 0; k < squareSize; k++) {
                diagOne.push(k + k * squareSize)
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
                            minorDiag.push(tileIndex)
                        }
                    }
                    winLines.push(minorDiag)
                }
            }




            // add /diagonal
            let diagTwo = []
            for (let k = 0; k < squareSize; k++) {
                diagTwo.push((squareSize - k - 1) + k * squareSize)
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
                            minorDiag.push(tileIndex)
                        }
                    }
                    winLines.push(minorDiag)
                }
            }


            return winLines
        }
        const lines = lineMaker()
        this.state = {
            playerOne: "💜",
            playerTwo: "☕",
            currentPlayerOne: true,
            history: [{
                squares: Array(squareSize * squareSize).fill(null),
                currentSquare: null,
                winner: null,
                winningLine: null
            }],
            moveNumber: 0,
            squareSize: squareSize,
            lines: lines
        };


    }

    calculateAnyWinner(squares) {
        for (let indexOfLine = 0; indexOfLine < this.state.lines.length; indexOfLine++) {
            let thisLine = this.state.lines[indexOfLine]

            let a = squares[thisLine[0]]

            if (a) {
                let count = 0;
                for (let k = 0; k < thisLine.length; k++) {
                    if (squares[thisLine[k]] == a)
                        count++
                }
                if (count == thisLine.length) { return [a, thisLine] }
            }
        }

        return null
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.moveNumber + 1);
        const currentBoard = history[history.length - 1];
        const newSquares = currentBoard.squares.slice();

        if (currentBoard.winner) {
            return
        }

        if (newSquares[i]) { return }


        newSquares[i] = this.state.currentPlayerOne ? this.state.playerOne : this.state.playerTwo

        let result = this.calculateAnyWinner(newSquares)
        let resultWinner = null;
        let resultLine = null;

        if (result) {
            resultWinner = result[0];
            resultLine = result[1];
        }

        this.setState({
            history: history.concat([{
                squares: newSquares,
                currentSquare: i,
                winner: resultWinner,
                winningLine: resultLine,
            }]),
            moveNumber: history.length,
            currentPlayerOne: !this.state.currentPlayerOne,
        });
    }

    jumpToMove(step) {
        this.calculateAnyWinner(this.state.history[step])
        this.setState({
            moveNumber: step,
            currentPlayerOne: !(step % 2)
        })
    }



    render() {
        const history = this.state.history;
        const currentBoard = history[this.state.moveNumber];
        const moves = history.map((step, move) => {
            const description = move ?
                "Go to move number " + move + "." :
                "Go to the start.";
            return (
                <div key={move} >
                    <button
                        onClick={() => this.jumpToMove(move)}
                        className="timeTravelButton"
                    >
                        {description}
                    </button>
                </div>
            )

        })

        let status;
        if (currentBoard.winner) {
            status = "Winner is " + currentBoard.winner;
        } else {
            status = "Next player is " + (this.state.currentPlayerOne ? this.state.playerOne : this.state.playerTwo);
        }

        return (
            <div className="game">
                <h2 className="status">{status}</h2>
                <div className="game-board">
                    <Board
                        squares={currentBoard.squares}
                        onClick={(i) => this.handleClick(i)}
                        winningLine={currentBoard.winningLine}
                        currentSquare={currentBoard.currentSquare}
                        squareSize={this.state.squareSize}
                    />
                </div>
                <div className="game-info">
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
export default Game
