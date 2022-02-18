import React, { CSSProperties } from "react";
import { textSizes } from "../utils/textSizes";

export interface SelfPortraitProps {
  className?: string;
  refKey?: string;
  // width?: string;

  // leftMargin?: string;
  sizes: textSizes;
}

const SelfPortrait: React.FC<SelfPortraitProps> = ({
  className,
  refKey,
  sizes: sizes,
}) => {
  return (
    <div
      className={className ? className : "SelfPortrait"}
      key={refKey ? refKey : "SelfPortrait"}
      style={{
        // marginLeft: "-" + sizes.halfHeight,
        width: sizes.bannerHeight,
        // marginRight: "-" + sizes.halfHeight,
      }}
    >
      <img
        src="me.png"
        alt="self portrait of me"
        style={{
          height: sizes.bannerHeight,
          borderRadius: "50%",
          // marginLeft:
        }}
      />
    </div>
  );
};
export default SelfPortrait;
