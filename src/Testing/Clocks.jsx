import React from "react";
// import Math from "Math"

class MiniClock extends React.Component {
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

    getTimePart(integer, timeObject) {
        switch (integer) {
            case 0:
                return timeObject.getFullYear()
            case 1:
                return timeObject.getMonth()
            case 2:
                return timeObject.getUTCDay()
            case 3:
                return timeObject.getHours()
            case 4:
                return timeObject.getMinutes()
            case 5:
                return timeObject.getSeconds()
            default:
                break;
        }
    }

    getString(integer, timeObject) {
        return this.getTimePart(integer, timeObject).toString()
    }

    timePiece(integer, timeObject) {
        // 0 is largest time (hours), getting smaller by integer.
        return this.getString(integer + 3, timeObject).padStart(2, 0)
    }

    datePiece(integer, dateObject) {
        // 0 is largest time (years), getting smaller by integer.
        return this.getString(integer, dateObject).padStart(2, 0).slice(-2)
    }

    timeChunck(timeOrder, timeObject) {
        let timeString = []
        for (const integer of timeOrder) {
            timeString.push(this.timePiece(integer, timeObject))
            timeString.push(":")
        }
        timeString.pop()
        timeString.push(<br />)
        return timeString
    }

    dateChunck(timeOrder, timeObject) {
        let dateString = []
        for (const integer of timeOrder) {
            dateString.push(this.datePiece(integer, timeObject))
            dateString.push("/")
        }
        dateString.pop()
        dateString.push(<br />)
        return dateString
    }

    render() {
        let p = this.props
        let style = {
            backgroundColor: p.backgroundColor ? p.backgroundColor : "var(--Secondary-2)",
            fontSize: p.fontSize ? p.fontSize : "100px",


            "color": "var(--Grey-0)",
            "paddingLeft": "10px",
            "paddingRight": "10px",
            "border": "solid",
            "textAlign": "center",
        }
        let name = p.name ? [p.name, <br />] : ""
        let time = this.timeChunck(p.timeOrder, p.timeObject)
        let date = this.dateChunck(p.timeOrder, p.timeObject)

        return <div style={style}>
            {name}
            {time}
            {date}
        </div>
    }
}

function ArcChunck(props) {
    let {internalAngle, externalAngle, arcGap, arcWidth} = props
    let radianInternalAngle = Math.PI * internalAngle / 180
    let radianExternalAngle = Math.PI * externalAngle / 180

    const A = [
        arcGap * Math.sin(radianExternalAngle),
        -arcGap * Math.cos(radianExternalAngle)
    ]
    const B = [
        (arcGap + arcWidth) * Math.sin(radianExternalAngle),
        -(arcGap + arcWidth) * Math.cos(radianExternalAngle)
    ]
    const C = [
        (arcGap + arcWidth) * Math.sin(radianExternalAngle + radianInternalAngle),
        -(arcGap + arcWidth) * Math.cos(radianExternalAngle + radianInternalAngle)
    ]
    const D = [
        arcGap * Math.sin(radianExternalAngle + radianInternalAngle),
        -arcGap * Math.cos(radianExternalAngle + radianInternalAngle)
    ]


    const arcString = `
    M ${A[0]} ${A[1]}
    L ${B[0]} ${B[1]}
    A ${arcGap + arcWidth} ${arcGap + arcWidth} 0 0 1 ${C[0]} ${C[1]}
    L ${D[0]} ${D[1]}
    A ${arcGap} ${arcGap} 0 0 0 ${A[0]} ${A[1]}
    Z
    `

    return <path id="circleClock" d={arcString} fill={props.fill} stroke="var(--Grey-1)" strokeWidth="0.02px" />


}

function ArcSixty(props) {
    return <ArcChunck
        internalAngle={6}
        externalAngle={6 * props.time}
        arcGap={props.arcGap} arcWidth={props.arcWidth} fill={props.fill}
    />
}

function ArcTwelve(props) {
    return <ArcChunck
        internalAngle={30}
        externalAngle={30 * props.time}
        arcGap={props.arcGap} arcWidth={props.arcWidth} fill={props.fill}
    />
}

function ArcTwentyFour(props) {
    return <ArcChunck
        internalAngle={15}
        externalAngle={15 * props.time}
        arcGap={props.arcGap} arcWidth={props.arcWidth} fill={props.fill}
    />
}
class RoundClock extends MiniClock {
    constructor(props) {
        super(props)
    }
    render() {
        return <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 6 6" version="1.1">
            <ArcTwelve arcGap={0.5} arcWidth={2.5} time={this.getTimePart(3, this.state.curTime)} fill={this.props.fillHours} /> {/* hours*/}
            <ArcSixty arcGap={1} arcWidth={2} time={this.getTimePart(4, this.state.curTime)} fill={this.props.fillMinutes} /> {/*minutes*/}
            <ArcSixty arcGap={2} arcWidth={1} time={this.getTimePart(5, this.state.curTime)} fill={this.props.fillSeconds} /> {/*seconds*/}
        </svg>
    }
}

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
                    <RoundClock timeObject={T}
                        fillHours="var(--Secondary-0)"
                        fillMinutes="var(--Secondary-1)"
                        fillSeconds="var(--Secondary-2)"
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