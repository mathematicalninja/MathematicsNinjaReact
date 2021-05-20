import React from "react";

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
            </div >
        );
    }
}
// Sat May 15 2021 20:05:21 GMT+0100 (British Summer Time)

export default Clocks