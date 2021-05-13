import React from "react";


class Banner extends React.Component {
    constructor(props) {
        super(props)
        // console.log("banner load")
    }
    textRender() {
        const mathsText = <span key="maths">Maths</span>
        const isText = <span key="is"> is an </span>
        const artText = <span key="art"
            style={{
                "fontFamily": "DancingScript",
                "color": "var(--Accent-1)"
            }}> Artform.</span>
        return [mathsText, isText, artText]
    }
    render() {



        return <div style={{
            "width": "80vw",
            "height": "9vw",
            "background-color": "var(--Secondary-2)",
            "text-align": "center",
            "font-size": "8vw",
            "color": "var(--Grey-0)",
            "margin-bottom": "0.75vw",
        }
        }

        // style={{ "fontSize": "8vw" }}
        >
            {/* Maths is Art. */}
            {this.textRender()}
            <img src="me.png" style={{height: "9vw"}} />
        </div >
    }
}

export default Banner