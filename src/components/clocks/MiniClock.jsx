import React from "react";

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
        }, 10)
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
            case 6:
                return timeObject.getMilliseconds()
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

    timeChunk(timeOrder, timeObject) {
        let timeString = []
        for (const integer of timeOrder) {
            timeString.push(this.timePiece(integer, timeObject))
            timeString.push(":")
        }
        timeString.pop()
        timeString.push(<br />)
        return timeString
    }

    dateChunk(timeOrder, timeObject) {
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
        let time = this.timeChunk(p.timeOrder, p.timeObject)
        let date = this.dateChunk(p.timeOrder, p.timeObject)

        return <div style={style}>
            {name}
            {time}
            {date}
        </div>
    }
}


export default MiniClock