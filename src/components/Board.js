// import react from "react";
import Tile from "./Tile.js"

import "./Board.scss"

function Board(props) {
    console.log(props)

    let currentColumns = props.currentBoard.squares;
    // console.log(columns)
    const boardReturn = []
    // for (let column of currentColumns) {
    for (let colIndex = 0; colIndex < currentColumns.length; colIndex++) {
        let colReturn = []
        // for (let row of currentColumns[colIndex]) {
        for (let rowIndex = 0; rowIndex < currentColumns[colIndex].length; rowIndex++) {

            // tileData needs to be in such a fasion as to be upliftable to board.onclick(DATA){this.setState(stuff)}
            // colReturn.push(<Tile
            //     tileData={currentColumns[colIndex][rowIndex]}
            //     handleClick={
            //         () => {
            //             this.handleClick(colIndex, rowIndex)
            //         }
            //     }
            //     key={rowIndex}
            // />)
            let tileData = currentColumns[colIndex][rowIndex] ? currentColumns[colIndex][rowIndex] : {
                content: null,
                tileClass: "Tile",
                // onClick: props.onClick,
            }
            colReturn.push(<Tile
                tileClass={tileData.tileClass}
                handleClick={() => props.handleClick(colIndex, rowIndex)}
                content={tileData.content}
                key={rowIndex}
            />)
            // console.log("this.state")
            // console.log(this.state)
        }
        boardReturn.push(
            <div className="gameBoardColumn"
                key={colIndex}
            >
                {colReturn}
            </div>
        )
    }
    return <div className="boardGrid"> {boardReturn}
    </div>
}
// handleClick(colIndex, rowIndex) {
//     return this.props.handleClick(colIndex, rowIndex)
// }



export default Board