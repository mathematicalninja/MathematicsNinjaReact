import React from "react";

import RoundClock from "../components/clocks/RoundClock.tsx"
import MiniClock from "../components/clocks/MiniClock"

class Clocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curTime: new Date(),
        };
    }


    componentDidMount() {
        setInterval(() => {
            this.setState({
                curTime: new Date()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let T = this.state.curTime

        return (
            <div>
                <dir style={{
                    "display": "flex",
                    "flexDirection": "row",
                    "justifyContent": "center",

                }}>
                    <RoundClock
                        timeObject={T}
                        fillHours="var(--Secondary-0)"
                        fillMinutes="var(--Secondary-1)"
                        fillSeconds="var(--Secondary-2)"
                        offset={1}
                        smooth={1}
                        timeOrder={[2, 1, 0]}
                    // snapToPrev={1}
                    />
                </dir>
                <div
                    style={{
                        paddingTop: "10px",
                        display: "grid",
                        // gridTemplate: ". . . . .",
                        gridTemplateColumns: "1fr  auto auto auto 1fr",
                        // gridTemplateAreas: " ukTime usaTime utcTime ",
                        width: "auto",
                        height: "auto",
                        // backgroundColor: "var(--Secondary-2)",
                        fontSize: "100px",


                    }}
                >
                    <div />
                    <MiniClock name="UK" timeOrder={[2, 1, 0]} timeObject={T} />
                    <MiniClock name="USA" timeOrder={[1, 2, 0]} timeObject={T} />
                    <MiniClock name="UTC" timeOrder={[0, 1, 2]} timeObject={T} />
                    <div />
                    <br />
                </div>
            </div>
        );
    }
}


// Sat May 15 2021 20:05:21 GMT+0100 (British Summer Time)

export default Clocks