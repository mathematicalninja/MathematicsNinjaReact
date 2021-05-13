import React from "react";
import "./Let.svg"
import "./Heart.svg"
import "./Zero.svg"

import "../../public/icon.svg"

// import Disc from "./Disc.svg"
import Disc from "./Disc.jsx"
import Icon from "./testIcon.jsx"

class SVGPostion extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        // margins
        // x in [0,43]
        const x = 34
        // y in [0, 76]
        const y = 56


        // widths (Let, Heart, Zero)
        const lW = 350
        const hW = 350
        const zW = 108

        // Text height
        const tH = 180

        // gaps
        let gH = 152 - 2 * y
        let gL = 81 - x
        let gW = 87 - 2 * x

        console.log("(x, y, gH, gL, gW) = ", x, y, gH, gL, gW)
        console.log("x", x)
        console.log("y", y)
        console.log("gH", gH)
        console.log("gL", gL)
        console.log("gW", gW)

        console.log("P_L", x + gL, y)
        console.log("P_E", x, y + gH + 180)
        console.log("P_Z", x + gW + 315, y + gH + 180)


        let testDiv =
            <div
                style={{
                    "backgroundColor": "var(--Primary-2)",
                    "width": 512,
                    "height": 512,
                }}
            >
                <img src="./Let.svg"
                    style={{
                        "paddingLeft": x + gL,
                        "paddingTop": y,
                    }}
                />
                <img src="./Heart.svg"
                    style={{
                        "paddingLeft": x,
                        "paddingTop": gH,
                    }}
                />
                <img src="./Zero.svg"
                    style={{
                        "paddingLeft": gW,
                        "paddingTop": gH,
                    }}
                />
            </div>

        return (
            <div>
                {/* {testDiv} */}
                <Disc
                    outerEdge="var(--Grey-0)"
                    outerColour="var(--Vivids-5)"
                    innerEdge="var(--Grey-0)"
                    innerColour="var(--Vivids-6)"
                    size={100}
                />
                {/* <img src="icon 1.svg" /> */}
                <Icon
                    backgroundColour="var(--Primary-2)"
                    letColour="var(--Grey-1)"
                    heartLine="var(--Grey-1)"
                    heartFill="var(--Accent-4)"
                    zeroLine="var(--Grey-1)"
                    zeroFill="var(--Accent-4)"
                    zeroDot="var(--Grey-8)"
                    size={512}
                />
            </div>
        );
    }
}

export default SVGPostion