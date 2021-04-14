import React from 'react';
import Tile from "./Tile.js";
import "./ConnectFourColumn.scss"


class ConnectFourColumn extends React.Component {
    constructor(props) {
        super(props);
        const rowMaker = () => {
            const rows = [];
            const rowValues = [];
            for (let i = 0; i < this.props.numberOfRows; i++) {
                rowValues.push(null)
                rows.push(
                    <Tile
                        key={i}
                        handleClick={this.props.handleClick(i)}
                        tileType=""
                    />
                )
            }
            return [rows, rowValues]
        };
        const rowDetails = rowMaker();
        this.state = {
            numberOfRows: this.props.numberOfRows,
            rows: rowDetails[0],
            rowValues: rowDetails[1],
        };
    };

    handleClick(i) {
        const tempValues = this.state.rowValues.slice();
        tempValues[i] = "-winner";
        this.setState({
            rowValues: tempValues,
        })
    }

    render() {
        return (
            <div className="ConnectFourColumn">
                {this.state.rows}
            </div>
        );
    };
}

export default ConnectFourColumn;