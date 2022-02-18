import React from "react";
// import "./logo.scss";
import Icon from "../assets/testIcon";
import { textSizes } from "../utils/textSizes";

export interface logoProps {
  className?: string;
  refKey?: string;

  sizes: textSizes;
}

const Logo: React.FC<logoProps> = (props) => {
  return (
    <div
      className={props.className ? props.className : "Logo"}
      key={props.refKey ? props.refKey : "Logo"}
    >
      <Icon
        backgroundColour="var(--Primary-2)"
        letColour="var(--Grey-1)"
        heartLine="var(--Grey-1)"
        heartFill="var(--Accent-9)"
        zeroLine="var(--Grey-1)"
        zeroFill="var(--Accent-9)"
        zeroDot="var(--Grey-8)"
        size={props.sizes.bannerHeight}
      />
    </div>
  );
};

export default Logo;
