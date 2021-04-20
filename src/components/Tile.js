import react from "react";
import "./Tile.scss";

class Tile extends react.Component {
    constructor(props) {
        super(props)
        // takes input tileData, otherwise makes a default tile
        this.state = props.tileData ? props.tileData : {
            content: null,
            tileClass: "Tile",
        }
    }
    render() {
        return <button
            class={this.state.tileClass}
        >{this.state.content}</button>

    }
}

export default Tile