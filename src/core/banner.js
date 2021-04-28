import React from "react";
import "./banner.scss"


class Banner extends React.Component {
    constructor(props) {
        super(props)
        console.log("banner load")
    }
    render() {
        return <div id="BannerBox" className="banner">Maths is Art.</div>
    }
}

export default Banner