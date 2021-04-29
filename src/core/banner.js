import React from "react";
import "./banner.scss"


class Banner extends React.Component {
    constructor(props) {
        super(props)
        console.log("banner load")
    }
    textRender() {
        const mathsText = <span>Maths</span>
        const isText = <span> is an </span>
        const artText = <span
            style={{
                "fontFamily": "DancingScript",
                "color": "var(--Accent-1)"
            }}> Artform.</span>
        return [mathsText, isText, artText]
    }
    render() {
        return <div id="BannerBox" className="banner"
        // style={{ "fontSize": "8vw" }}
        >
            {/* Maths is Art. */}
            {this.textRender()}
        </div>
    }
}

export default Banner