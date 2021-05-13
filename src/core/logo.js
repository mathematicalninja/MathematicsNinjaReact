import React from "react";
import "../styles/global.scss"
import "./logo.scss"
import Icon from "./testIcon.jsx"

class Logo extends React.Component {
    constructor(props) {
        super(props)
        // console.log("Logo load")
    }
    render() {
        return <div id="LogoSquare" className="logo">
            {/* old logo, for prosperity */}
            {/* <div
                style={{
                    position: "relative",
                    bottom: "-.5vw"
                }}
            >Let </div>
            <div
                style={{
                    position: "relative",
                    top: "-.5vw"
                }}>
                <span
                    style={{
                        position: "relative",
                        top: "-0.35vw",
                        fontSize: "4.5vw"
                    }}
                >ε</span><span
                    style={{fontSize: "4vw"}}
                >{">"}0</span>
            </div> */}
            {/* <img src="./icon.svg" style={{"width": "9vw"}} /> */}
            <Icon
                backgroundColour="var(--Primary-2)"
                letColour="var(--Grey-1)"
                heartLine="var(--Grey-1)"
                heartFill="var(--Accent-4)"
                zeroLine="var(--Grey-1)"
                zeroFill="var(--Accent-4)"
                zeroDot="var(--Grey-8)"
                size="9vw"
            />
        </div>
    }
}

export default Logo