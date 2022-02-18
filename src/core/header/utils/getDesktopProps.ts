import { desktopHeaderProps } from "../global/desktopHeader";
import { getBannerSizeByHeight } from "./getBannerSizes";
import {
  // getBannerSizeByWidth,
  textSizes,
} from "./textSizes";

export function getDesktopProps(props: desktopHeaderProps): textSizes {
  ``;
  let sizes;

  if (typeof props.height === "number") {
    let U;
    if (props.units) {
      U = props.units;
    } else {
      U = "";
    }
    sizes = getBannerSizeByHeight({ bannerHeight: props.height, unit: U });
    // } else if (typeof props.width === "number") {
    //   let U;
    //   if (props.units) {
    //     U = props.units;
    //   } else {
    //     U = "";
    //   }
    //   sizes = getBannerSizeByWidth(props.width, U);
  } else {
    sizes = getBannerSizeByHeight({ bannerHeight: 10, unit: "vw" });
  }

  return sizes;
}
