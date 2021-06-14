import React from "react";

class Banner extends React.Component {
    constructor(props) {
        super(props)
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
            "width": "70vw",
            "height": "9vw",
            "background-color": "var(--Secondary-2)",
            "text-align": "center",
            "font-size": "8vw",
            "color": "var(--Grey-0)",
            "margin-bottom": "0.75vw",
            "marginRight": "4.5vw",
            "paddingLeft": "1.5vw",
        }
        }

        >
            <div style={{

                "display": "grid",
                "grid-template-columns": "auto 4.5vw",

            }}>
                <div>
                    {this.textRender()}
                </div>
                <div>
                    <img src="me.png" style={{
                        height: "9vw",
                        "borderRadius": "50%"
                    }} />
                </div>
            </div>
        </div>
    }
}

export default Banner