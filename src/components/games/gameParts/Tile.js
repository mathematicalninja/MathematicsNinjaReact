import React from "react";
// import "./Tile.scss";

function Tile(props) {

    return <button
        className={ props.tileClass }
        onClick={ () => props.handleClick() }
    >
        { props.content }
    </button>

}

export default Tile