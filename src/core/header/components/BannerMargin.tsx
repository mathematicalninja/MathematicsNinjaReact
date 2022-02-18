import React from "react";
import { textSizes } from "../utils/textSizes";

interface BannerMarginProps extends textSizes {
  // width: string;
  // margin?: string;
  // height?: string;
  side: "left" | "right";
}

const BannerMargin: React.FC<BannerMarginProps> = (props) => {
  // if (!props.width) {
  //   return <div />;
  // }
  // let h: string;
  // if (!props.height) {
  //   h = "0px";
  // } else {
  //   h = props.height;
  // }
  let W: string;
  switch (props.side) {
    case "left":
      W = props.innerMarginLeft;
      break;
    case "right":
      W = props.innerMarginRight;
      break;
  }

  const BannerMarginStyle: React.CSSProperties = {
    width: W,
    height: props.bannerHeight,
    backgroundColor: "var(--Secondary-2)",
  };
  return <div style={BannerMarginStyle}></div>;
  // return <div></div>;
};
export default BannerMargin;
