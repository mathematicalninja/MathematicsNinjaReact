import React from 'react';
import Tile from "./Tile.js";
import "./ConnectFourColumn.scss"

class ConnectFourColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfRows: this.props.numberOfRows,
            rowValues: Array(this.props.numberOfRows).fill(""),
        };
    };

    // rowMaker() {
    //     const rows = [];
    //     const rowValues = [];
    //     for (let i = 0; i < this.props.numberOfRows; i++) {
    //         rowValues.push(null)
    //         rows.push(
    //             <Tile
    //                 key={i}
    //                 handleClick={this.props.handleClick(i)}
    //                 tileType={this.state.rowValues[i]}
    //             />
    //         )
    //     }
    //     return rows
    // };

    handleClick(i) {
        const tempValues = this.state.rowValues.slice();
        tempValues[i] = "-winner";
        this.setState({
            rowValues: tempValues,
        })
    }

    render() {
        const rowMaker = () => {
            const rows = [];
            const rowValues = [];
            for (let i = 0; i < this.props.numberOfRows; i++) {
                rowValues.push(null)
                rows.push(
                    <Tile
                        key={i}
                        handleClick={this.props.handleClick(i)}
                        tileType={this.state.rowValues[i]}
                    />
                )
            }
            return rows
        };
        return (
            <div className="ConnectFourColumn">
                {rowMaker()}
            </div>
        );
    };
}

export default ConnectFourColumn;