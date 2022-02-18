import React, { CSSProperties } from "react";
import BannerMargin from "../components/BannerMargin";
import { getBannerSizeByHeight } from "../utils/getBannerSizes";
import { textSizes } from "../utils/textSizes";

export interface BannerProps {
  className?: string;
  refKey?: string;

  padRight?: boolean;
  sizes: textSizes;
}

const MathsStyle = {};
const IsStyle = {};
const ArtStyle: CSSProperties = {
  fontFamily: "DancingScript",
  color: "var(--Accent-1)",
  // outlineColor: "var(--Accent-1)",
  textShadow:
    "-1px -1px 0 #640c4e, 1px -1px 0 #640c4e, -1px 1px 0 #640c4e, 1px 1px 0 #640c4e", //FIXME: not zoom independent
};
const layoutStyle = {
  display: "grid",
  gridTemplateColumns: " auto auto auto",
  // gridTemplateAreas: "bannerSloganLeft bannerSloganMiddle bannerSloganRight",
};

class Banner extends React.Component<BannerProps> {
  textRender() {
    const mathsText = <span key="maths">Maths</span>;
    const isText = <span key="is"> is an </span>;
    const artText = (
      <span key="art" style={ArtStyle}>
        Artform.
      </span>
    );
    return [mathsText, isText, artText];
  }
  render() {
    let rightType: "right" | "left" = "right";
    let padRight: Boolean = true;
    if (typeof this.props.padRight === "boolean") {
      if (!this.props.padRight) {
        rightType = "left";
      }
    }
    const BannerStyle: React.CSSProperties = {
      backgroundColor: "var(--Secondary-2)",
      color: "var(--Grey-0)",
      textAlign: "center",

      width: this.props.sizes.textWidth,
      height: this.props.sizes.bannerHeight,
      fontSize: this.props.sizes.fontSize,

      marginBottom: this.props.sizes.marginBottom,
    };

    const className = this.props.className ? this.props.className : "banner";
    const refKey = this.props.refKey ? this.props.refKey : "banner";
    return (
      <div style={layoutStyle} key={refKey}>
        <BannerMargin
          {...this.props.sizes}
          // width={this.props.sizes.innerMargin}
          // width="6vw"
          side="left"
        />
        <div className={className} style={BannerStyle}>
          {this.textRender()}
        </div>
        <BannerMargin
          {...this.props.sizes}
          // width={this.props.sizes.innerMarginRight}
          side={rightType}
          // marginRight="-20px"
        />
      </div>
    );
  }
}

export default Banner;
