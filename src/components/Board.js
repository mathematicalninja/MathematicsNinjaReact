import react from "react";
import Tile from "./Tile.js"

import "./Board.scss"

class Board extends react.Component {
    constructor(props) {
        super(props);
        this.state = props.currentBoard
        // console.log(this.state)
    }
    boardBuilder() {
        let currentColumns = this.state.squares;
        // console.log(columns)
        let boardReturn = []
        for (let column of currentColumns) {
            let colReturn = []
            for (let row of column) {
                // tileData needs to be in such a fasion as to be upliftable to board.onclick(DATA){this.setState(stuff)}
                colReturn.push(<Tile tileData={row} />)
            }
            boardReturn.push(
                <div className="gameBoardColumn">
                    {colReturn}
                </div>
            )
        }
        return boardReturn
    }
    render() {
        return <div className="boardGrid">
            {this.boardBuilder()}
        </div>
    }
}

export default Board