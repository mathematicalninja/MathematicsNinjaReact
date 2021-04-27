import React from "react";
import Board from "./gameParts/Board.js";
import HistoryControls from "./gameParts/HistoryControls.js"

import "./connectFour.scss"

import squareGame from "./squareGame.js"


class ConnectFour extends squareGame {
    constructor(props) {
        super(props);
        //takes input squareSize or defaults to 3 by 3
        let gridSize = props.gridSize ? props.gridSize : [7, 6]
        this.state = {
            playerLogos: ["💜", "🦇", "☕",],
            currentPlayer: 0,
            maxPlayers: 2,
            moveNumber: 0,
            squareSize: gridSize,
            history: [this.blankBoard(gridSize)],
            winningLines: this.lineMaker(gridSize)
        }
    }


}
export default ConnectFour