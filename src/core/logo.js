import React from "react";
import "../styles/global.scss"
import "./logo.scss"

class Logo extends React.Component {
    constructor(props) {
        super(props)
        console.log("Logo load")
    }
    render() {
        return <div id="LogoSquare" className="logo">
            <div>Let </div>
            <div>ε{">"}0</div>
        </div>
    }
}

export default Logo