import React from "react";
import ConnectFour from "./ConnectFour.js"

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div classname="gameContainer">
                <ConnectFour />
            </div>
        )
    }
}

export default GameContainer