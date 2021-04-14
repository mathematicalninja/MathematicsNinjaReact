import React from 'react';
import "./Tile.scss"

function Tile(props) {
    return (
        <div>
            <button
                className={"tile" + props.tileType}
                onClick={props.handleClick}
            >
            </button>
        </div>
    );
};


export default Tile;