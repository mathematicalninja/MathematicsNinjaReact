import React from 'react';
import Board from "./Board";
import "./tile.scss"

class ConnectFour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    render() {
        return (
            <div>
                <button className="tile">nope</button>
                <Board />
            </div>
        );
    };
};


export default ConnectFour;