import React from "react";
import "../styles/global.scss"
import "./logo.scss"

class Logo extends React.Component {
    constructor(props) {
        super(props)
        console.log("Logo load")
    }
    render() {
        return <div id="LogoSquare" className="logo">Let ε{">"}0.
</div>
    }
}

export default Logo