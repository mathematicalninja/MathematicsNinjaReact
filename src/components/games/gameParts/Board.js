// import react from "react";
import Tile from "./Tile.js"

// import "./Board.scss"

function Board(props) {

    const currentColumns = props.currentBoard.squares;
    const boardReturn = []
    for (let colIndex = 0; colIndex < currentColumns.length; colIndex++) {
        let colReturn = []
        for (let rowIndex = 0; rowIndex < currentColumns[colIndex].length; rowIndex++) {
            let tileData = currentColumns[colIndex][rowIndex] ? currentColumns[colIndex][rowIndex] : {
                content: null,
                tileClass: "Tile",
            }
            colReturn.push(<Tile
                tileClass={ tileData.tileClass }
                handleClick={ () => props.handleClick(colIndex, rowIndex) }
                content={ tileData.content }
                key={ rowIndex }
            />)
        }
        boardReturn.push(
            <div className="gameBoardColumn"
                key={ colIndex }
            >
                { colReturn }
            </div>
        )
    }
    return <div className="boardGrid">
        { boardReturn }
    </div>
}


export default Board