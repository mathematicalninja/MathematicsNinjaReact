import React from "react";
import Board from "../components/gameParts/Board.js";
import HistoryControls from "../components/gameParts/HistoryControls.js"

import "../components/connectFour.scss"

import squareGame from "../components/squareGame.js"




class GridGame extends squareGame {
    constructor(props) {
        super(props);
        //takes input squareSize or defaults to 3 by 3
        let gridSize = props.gridSize ? props.gridSize : [3, 3]
        this.state = {
            playerLogos: ["💜", "🦇", "☕",],
            currentPlayer: 0,
            maxPlayers: 2,
            moveNumber: 0,
            squareSize: gridSize,
            history: [this.blankBoard(gridSize)],
            winningLines: this.lineMaker(gridSize)
        }
        // changes game history to winning lines
        this.lineVisuals()
    }

    lineMaker(gridSize, diags, xLens, yLens) {
        const min = (A, B) => {return A < B ? A : B}
        const max = (A, B) => {return A > B ? A : B}

        // gridSize = [xWidth, yWidth]
        // diags = [minLength, maxLength]
        // xlens = [minLength, maxLength]
        // yLens = [minLength, maxLength]

        // if any of the mins are greater than the length they fit into, no lines of that type will be made.
        // e.g. this can stop diags being made

        // added in logic that accounts for yMin > yMax as inputs
        diags = diags ? [min(diags[0], diags[1]), max(diags[0], diags[1])] : [3, 5]
        xLens = xLens ? [min(xLens[0], xLens[1]), max(xLens[0], xLens[1])] : [3, 5]
        yLens = yLens ? [min(yLens[0], yLens[1]), max(yLens[0], yLens[1])] : [3, 5]

        const [xWidth, yWidth] = gridSize
        const [diagMin, diagMax] = diags[0] > min(xWidth, yWidth) ? [null, null] : [diags[0], diags[1]]

        const [xMin, xMax] = xLens[0] > xWidth ? [null, null] : [xLens[0], min(xLens[1], xWidth)]
        const [yMin, yMax] = yLens[0] > yWidth ? [null, null] : [yLens[0], min(yLens[1], yWidth)]

        // ==========================================
        // Pseudo-code
        // Loop over (x,y)
        // calculate x_left, x_right distances to the edges, (including this tile?)
        // Likewise y_bottom

        // if x_right and y_bottom > x_min and y_min (respectivly): draw those lines

        // if y_bottom > diag_min
        //      AND
        // x_left or x_right >diag_min
        //      THEN
        // draw that downwards diagonal.
        // ==========================================

        // Sub-function
        // takes (x,y) and [xWidth, yWidth]
        // returns x_left, x_right, y_bottom


        // ====================
        // for the below functions:
        // add in optional "only use shortest line"
        // ====================

        // Sub-function
        // takes x_values, [x,y]
        // returns all the Required x_lines starting at [x,y]

        // Sub-function
        // as above, but for y

        // Sub-function
        // as above, but for down Right diagonals

        // Sub-function
        // as above, but for down Left diagonals

        return [[[0, 0]]]
    }



    // changeStyling(currentBoardState) {
    //     return currentBoardState
    // }

    // used for showing the winning lines
    lineVisuals() {
        let newHistory = this.state.history
        let T = 0
        for (let line of this.state.winningLines) {
            T += 1
            console.log(T)
            console.log(line)



            let newBoard
            newBoard = Array(this.state.squareSize[0]).fill(Array(this.state.squareSize[1]).fill(null));
            const A = {
                squares: newBoard,
                currentTile: null,
                winner: true,
                winningLine: line,
                moveList: [],
            }


            A.squares = Array(this.state.squareSize[0]).fill(Array(this.state.squareSize[1]).fill(null))
            console.log("set to null at 0,0", A.squares[0][0])

            // A.statemoveList = []
            // console.log("A", A)
            // for (let i = 0; i < A.squares.length; i++) {
            //     for (let j = 0; j < A.squares[i].length; j++) {
            //         A.moveList.push([i, j])
            //         A.squares[i][j] = null
            //     }
            // }
            // console.log(A.squares)

            let X_array = Array(this.state.squareSize[0]).fill(Array(this.state.squareSize[1]).fill({
                // content: this.state.playerLogos[T % 2],
                content: "",
                tileClass: "Tile",
            }))
            for (let i = 0; i < line.length; i++) {
                console.log("should still be null at 0,0", A.squares[0][0])

                let x = line[i][0]
                let y = line[i][1]
                // console.log(x, y, A.squares[x][y])



                let Y_array = Array(this.state.squareSize[1]).fill({
                    // content: this.state.playerLogos[T % 2],
                    content: "",
                    tileClass: "Tile",
                })

                Y_array[y] = {
                    // content: this.state.playerLogos[T % 2],
                    content: [x, y],
                    tileClass: "Tile-winner",
                }
                X_array[x] = Y_array
                console.log("X_array", X_array)

                console.log(A.squares)
                A.squares = X_array
                console.log(A.squares)
                console.log("suddenly it's not null at 0,0", A.squares[0][0])

                console.log("x,y", A.squares[x][y])
                console.log("0,0", A.squares[0][0])

            }

            console.log(A)

            newHistory.push(A)
        }

        console.log(newHistory)
        return newHistory
    }

}
export default GridGame