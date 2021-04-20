import react from "react";
import Tile from "./Tile.js"

import "./Board.scss"

class Board extends react.Component {
    constructor(props) {
        super(props);
        this.state = props.currentBoard
        this.onClick = props.onClick
        // console.log(this.state)
        this.state.clicked = false
    }
    handleClick(colIndex, rowIndex) {
        console.log(this.props.handleClick)
        return this.props.handleClick(colIndex, rowIndex)
        // this.setState(this.props.currentBoard)
        // console.log("this.props.currentBoard")
        // console.log(this.props.currentBoard)
        // console.log(this.state)
        // this.setState({
        //     currentTile: this.props.currentTile,
        //     squares: this.props.squares,
        //     winner: this.props.winner
        // })
        // this.setState({ clicked: true })
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
                    handleClick={() => this.handleClick(colIndex, rowIndex)}
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
        return boardReturn
    }
    // handleClick(colIndex, rowIndex) {
    //     return this.props.handleClick(colIndex, rowIndex)
    // }
    render() {
        // console.log("Board")
        // console.log(this)
        return <div className="boardGrid">
            {this.boardBuilder()}
        </div>
    }
}

export default Board