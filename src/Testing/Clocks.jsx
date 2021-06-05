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
    // console.log({internalAngle, externalAngle, arcGap, arcWidth})
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

    // https://svg-path-visualizer.netlify.app/#M%200%20-2%20%20%20%20L%200%20-3%20%20%20%20A%203%203%200%200%201%203%200%20%20%20%20L%202%200%20%20%20A%202%202%200%200%200%200%20-2%20z
    // https://css-tricks.com/svg-path-syntax-illustrated-guide/

    {/* A */}
    {/* rX,rY rotation, arc, sweep, eX,eY */}
    {/* Draw an arc that is based on the curve an oval makes. First define the width and height of the oval. Then the rotation of the oval. Along with the end point, this makes two possible ovals. So the arc and sweep are either 0 or 1 and determine which oval and which path it will take. */}

    return <g
    // transform="translate(150 150)"
    >
        <path id="circleClock" d={arcString} />
    </g>

    {/* <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <path id="ArcPath1" d="M 0 300    L 0 300    A 300 300 0 0 0 300 0   L 200 0   A 200 200 0 0 1 0 200 z"
                fill="#white"
            /></svg> */}
    {/* <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
                stroke-linecap="round" stroke-dasharray="5,10,5" fill="none" />
            <path d="M 10 75 L 190 75" stroke="red"
                stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none" />
        </svg> */}

}

function ArcSixty(props) {
    return <ArcChunck internalAngle={6} externalAngle={6 * props.time} arcGap={props.arcGap} arcWidth={props.arcWidth} />
}

function ArcTwelve(props) {
    return <ArcChunck internalAngle={30} externalAngle={30 * props.time} arcGap={props.arcGap} arcWidth={props.arcWidth} />
}

function ArcTwentyFour(props) {
    let {arcGap,
        arcWidth} = props

    return <ArcChunck internalAngle={15} externalAngle={0} arcGap={arcGap} arcWidth={arcWidth} />
}
class RoundClock extends MiniClock {
    constructor(props) {
        super(props)
    }
    render() {
        console.log("This", this.state)
        return <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 6 6" version="1.1">
            <ArcSixty arcGap={2} arcWidth={1} time={this.getTimePart(4, this.state.curTime)} />
            <ArcTwelve arcGap={1} arcWidth={1} time={this.getTimePart(3, this.state.curTime)} />
            <ArcSixty arcGap={0.5} arcWidth={0.5} time={this.getTimePart(5, this.state.curTime)} />

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
                <dir style={{
                    "display": "flex",
                    "flexDirection": "row",
                    "justifyContent": "center",

                }}>
                    <RoundClock timeObject={T} />
                </dir>
            </div>
        );
    }
}


// Sat May 15 2021 20:05:21 GMT+0100 (British Summer Time)

export default Clocks