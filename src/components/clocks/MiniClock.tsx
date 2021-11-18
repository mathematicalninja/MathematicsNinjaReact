import React from "react";
import QuirkClock from "./QuirkClock";
import type { QuirkClockInputs } from "./QuirkClock";

type MiniClockInputs = QuirkClockInputs & {
  backgroundColor: string;
  fontSize: string;
  name: string;

  color: string;
  paddingLeft: string;
  paddingRight: string;
  border: string;
  textAlign: string;

  flood: number; //test property, no functional use
};

class MiniClock extends QuirkClock<MiniClockInputs> {
  constructor(props: MiniClockInputs) {
    super(props);
    this.state = {
      curTime: new Date(),
    };
  }

  getSuperProps() {
    return {
      timeOrder: this.props.timeOrder,
      timeObject: this.props.timeObject,
    };
  }

  componentDidMount() {
    let intervalID = setInterval(() => {
      this.setState({
        curTime: new Date(),
      });
    }, 10);
    this.setState({ intervalID: intervalID });
    // console.log(this)
  }

  componentWillUnmount() {
    // clearInterval(this.state.intervalID);
  }

  render() {
    let p = this.props;
    let style = {
      backgroundColor: p.backgroundColor
        ? p.backgroundColor
        : "var(--Secondary-2)",
      fontSize: p.fontSize ? p.fontSize : "100px",

      color: "var(--Grey-0)",
      paddingLeft: "10px",
      paddingRight: "10px",
      border: "solid",
      textAlign: "center" as "center",
    };
    let name = p.name ? [p.name, <br />] : "";
    let time = this.timeChunk(p.timeOrder, p.timeObject);
    let date = this.dateChunk(p.timeOrder, p.timeObject);

    return (
      <div style={style}>
        {name}
        {time}
        {date}
      </div>
    );
  }
}

export default MiniClock;
