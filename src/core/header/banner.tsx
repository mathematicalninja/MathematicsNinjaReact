import React from "react";

interface BannerProps {
  className?: string;
  refKey?: string;
}

const MathsStyle = {};
const IsStyle = {};
const ArtStyle = {};

class Banner extends React.Component<BannerProps> {
  textRender() {
    const mathsText = <span key="maths">Maths</span>;
    const isText = <span key="is"> is an </span>;
    const artText = (
      <span
        key="art"
        style={{
          fontFamily: "DancingScript",
          color: "var(--Accent-1)",
        }}
      >
        {" "}
        Artform.
      </span>
    );
    return [mathsText, isText, artText];
  }
  render() {
    return (
      <div
        className={this.props.className ? this.props.className : "banner"}
        key={this.props.refKey ? this.props.refKey : "banner"}
        style={{
          width: "70vw",
          height: "9vw",
          backgroundColor: "var(--Secondary-2)",
          textAlign: "center",
          fontSize: "8vw",
          color: "var(--Grey-0)",
          marginBottom: "0.75vw",
          marginRight: "4.5vw",
          paddingLeft: "1.5vw",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 4.5vw",
          }}
        >
          <div>{this.textRender()}</div>
          {/* <div>
            <img
              src="me.png"
              alt="self portrait of me"
              style={{
                height: "9vw",
                borderRadius: "50%",
              }}
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Banner;
