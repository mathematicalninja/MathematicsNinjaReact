import react from "react";
import Tile from "./Tile.js"

import "./Board.scss"

class Board extends react.Component {
    constructor(props) {
        super(props);
        this.state = props.currentBoard
        this.onClick = props.onClick
        // console.log(this.state)
    }
    boardBuilder() {
        let currentColumns = this.state.squares;
        // console.log(columns)
        let boardReturn = []
        // for (let column of currentColumns) {
        for (let colIndex = 0; colIndex < currentColumns.length; colIndex++) {
            let colReturn = []
            // for (let row of currentColumns[colIndex]) {
            for (let rowIndex = 0; rowIndex < currentColumns[colIndex].length; rowIndex++) {

                // tileData needs to be in such a fasion as to be upliftable to board.onclick(DATA){this.setState(stuff)}
                colReturn.push(<Tile
                    tileData={currentColumns[colIndex][rowIndex]}
                    onClick={
                        () => {
                            // alert("hi")
                            this.props.handleClick(colIndex, rowIndex)
                        }
                    }
                    key={rowIndex}
                />)
                console.log(this.props)
            }
            boardReturn.push(
                <div className="gameBoardColumn"
                    key={colIndex}>
                    {colReturn}
                </div>
            )
        }
        return boardReturn
    }
    // handleClick(colIndex, rowIndex) {
    //     return this.props.handleClick(colIndex, rowIndex)
    // }
    render() {
        return <div className="boardGrid">
            {this.boardBuilder()}
        </div>
    }
}

export default Board