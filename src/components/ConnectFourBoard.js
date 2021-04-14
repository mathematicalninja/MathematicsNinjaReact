import React from 'react';
import ConnectFourColumn from "./ConnectFourColumn";
import "./ConnectFourBoard.scss"

class ConnectFourBoard extends React.Component {
    constructor(props) {
        super(props);
        const columns = [];
        for (let colIndex = 0; colIndex < this.props.numberOfColumns; colIndex++) {
            columns.push(<ConnectFourColumn
                key={colIndex}
                numberOfRows={this.props.numberOfRows}
                handleClick={(rowIndex) => this.handleClick(colIndex, rowIndex)}
            />)
        }
        this.state = {
            numberOfColumns: this.props.numberOfColumns,
            columns: columns,
        };

    };
    handleClick(j, i) {

    };
    render() {
        return (
            <div className="ConnectFourBoard">
                { this.state.columns}
            </div >
        );
    };
};


export default ConnectFourBoard;