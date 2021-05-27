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
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    timeChunck(timeOrder, timeObject) {
        let timeString = []
        for (const integer of timeOrder) {
            timeString.push(this.timePiece(integer, timeObject))
            timeString.push("/")
        }
        timeString.pop()
        timeString.push(<br />)
        return timeString
    }

    timePiece(integer, timeObject) {
        // 0 is largest time (hours), getting smaller by integer.
        switch (integer) {
            case 0:
                return timeObject.getHours()
            case 1:
                return timeObject.getMinutes()
            case 2:
                return timeObject.getSeconds()
            default:
                break;
        }
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

    datePiece(integer, dateObject) {
        // 0 is largest time (years), getting smaller by integer.
        switch (integer) {
            case 0:
                return dateObject.getFullYear()
            case 1:
                return dateObject.getMonth()
            case 2:
                return dateObject.getUTCDay()
            default:
                break;
        }
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
        let TimeStyle = {
            "color": "var(--Grey-0)",
            "paddingLeft": "10px",
            "paddingRight": "10px",
            "border": "solid",
            "textAlign": "center",
        }
        return (
            <div
                style={{
                    display: "grid",
                    // gridTemplate: ". . . . .",
                    gridTemplateColumns: "1fr auto auto auto auto 1fr",
                    // gridTemplateAreas: " ukTime usaTime utcTime ",
                    width: "auto",
                    height: "auto",
                    backgroundColor: "var(--Secondary-2)",
                    fontSize: "100px",


                }}
            >
                <div />
                {/* {T.getHours()}:{T.getMinutes()}:{T.getSeconds()} */}
                <div class="ukTime"
                    style={TimeStyle}
                >
                    UK
                    <br />
                    {T.getSeconds().toString().padStart(2, 0)}:{T.getMinutes().toString().padStart(2, 0)}:{T.getHours().toString().padStart(2, 0)}
                    <br />
                    {T.getUTCDay()}/{T.getMonth()}/{T.getFullYear()}
                    <br />
                </div>

                <div class="usaTime"
                    style={TimeStyle}
                // style={{"class": "usaTime"}}
                >
                    USA
                    <br />
                    {T.getMinutes().toString().padStart(2, 0)}:{T.getSeconds().toString().padStart(2, 0)}:{T.getHours().toString().padStart(2, 0)}
                    <br />
                    {T.getMonth()}/{T.getUTCDay()}/{T.getFullYear()}
                    <br />
                </div>
                <div class="utcTime"
                    style={TimeStyle}
                // style={{"class": "utcTime"}}
                >
                    UTC
                    <br />
                    {T.getHours().toString().padStart(2, 0)}:{T.getMinutes().toString().padStart(2, 0)}:{T.getSeconds().toString().padStart(2, 0)}
                    <br />
                    {T.getFullYear()}/{T.getMonth()}/{T.getUTCDay()}
                    <br />
                </div>
                <MiniClock name="heh" timeOrder={[2, 1, 0]} timeObject={this.state.curTime} />
            </div>
        );
    }
}


// Sat May 15 2021 20:05:21 GMT+0100 (British Summer Time)

export default Clocks