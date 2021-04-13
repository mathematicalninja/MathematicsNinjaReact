import React from 'react';
import Square from "./Square.js";

class Board extends React.Component {
    renderSquare(i) {
        let squareSuffix = ""
        if (this.props.winningLine) {
            for (let index = 0; index < this.props.winningLine.length; index++) {
                if (this.props.winningLine[index] == i) {
                    squareSuffix = "-winner"
                }
            }
        } else {
            if (this.props.currentSquare == i) {
                squareSuffix = "-current"
            }
        }
        return <Square
            value={this.props.squares[i]}
            onClick={
                () => {
                    this.props.onClick(i)
                }
            }
            squareType={squareSuffix}
        />;
    }

    runX(y, squareSize) {
        let returnRow = [];
        for (let x = 0; x < squareSize; x++) {
            returnRow.push(this.renderSquare(y * squareSize + x))
        }
        return (returnRow)
    }

    render() {
        const squareSize = this.props.squareSize
        const shape = () => {
            let returnShape = []
            for (let y = 0; y < squareSize; y++) {
                returnShape.push(
                    <div className="board-row">
                        {this.runX(y, squareSize)}
                    </div>
                )
            }
            return (returnShape)
        }

        return (
            <div>
                { shape()}
            </div >
        );
    }
}


export default Board