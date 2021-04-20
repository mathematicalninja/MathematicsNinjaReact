import React from "react";
import "./Tile.scss";

// class Tile extends React.Component {
//     constructor(props) {
//         super(props)
//         // takes input tileData, otherwise makes a default tile
//         this.state = props.tileData ? props.tileData : {
//             content: null,
//             tileClass: "Tile",
//             // onClick: props.onClick,
//         }
//     }

//     onClick() {
//         let tileData = this.props.handleClick()
//         console.log(this.props.handleClick)
//         if (tileData) {
//             console.log("heres")
//             this.setState(tileData)
//             console.log(this)
//         } else {
//             console.log(this)
//             return
//         }
//     }


//     render() {
//         return <button
//             className={this.state.tileClass}
//             onClick={() => this.onClick()}
//         >{this.state.content}</button>

//     }
// }

function Tile(props) {

    return <button
        className={props.tileClass}
        onClick={() => props.handleClick()}
    >{props.content}</button>

}

export default Tile