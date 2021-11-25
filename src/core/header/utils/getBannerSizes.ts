import addUnit from "./addUnit";
import { textSizes } from "./textSizes";
import { textSizesInput } from "./textSizesInput";

export function getBannerSizeByHeight({
  unit,

  bannerHeight,
  bannerWidth,

  textRatio,
  heightRatio,
  underhangRatio,

  marginRatio,
}: textSizesInput): textSizes {
  // everything here is defined off of:
  // absolute values BH, BW  [bannerHeight, bannerWidth],
  // the ratio TR of [bannerHeight / textWidth],
  // the ratio HR of [FontSize / bannerHeight],
  // the ratuo UR of [TextUnderhang / FontSize]
  // the ratio MR of [innerMargin / outerMargin]
  // with U [units] added

  // banner is:
  // OM  | BH | IM  | TW  | IM | BH | OM
  // RM [rightMargin] is IM + H/2, to allow portrait roundness
  // so: 2*OM + 2*BH + 2*IM+ TW = BW
  // giving OM = (1/2(1+MR))*(BW - 2*BH *TW)

  // TW = BH * TR

  // IM = OM * MR

  // inputs
  const BH: number = bannerHeight * ((1.1 * 5) / 6); // [BannerHeight]
  const FBW: number = bannerWidth ? bannerWidth : 100; // [FullBannerWidth]
  // TODO:

  // get parent container width

  // default assumes "%" or "vw" as the units
  //ToDo: make the input units account for the css possible units, then case out the possibilities toi define this as a default "full" width

  const TR: number = textRatio ? textRatio : 8 / 1.1; // [TextRatio]
  const HR: number = heightRatio ? heightRatio : 1 / 1.1;
  const UR: number = underhangRatio ? underhangRatio : 0.1 / 1.1;

  // calculated values
  const TW: number = BH * TR; // [TextWidth]
  const FS: number = BH * HR; // [FontSize]
  const TU: number = BH * UR; // [TextUnderhang]

  //

  const MR: number = marginRatio ? marginRatio : 4; // [MarginRatio]
  //
  const AM: number = FBW - TW - 2 * BH; // [AllMargin]

  const IM: number = AM / (2 * Math.abs(MR + 1)); // [OuterMargin]
  const OM: number = (IM * MR) / 2; // [InnerMargin]

  //
  //
  //
  //
  // const M: number = 30 / 2;

  const LM: number = IM;
  const RM: number = LM + BH / 2;

  const TBW: number = TW + 2 * IM;

  const W: number = (BH * 8) / 1.1;

  // const oldSizes = {
  //   height: addUnit((height * 1.1 * 5) / 6, unit),

  //   textWidth: addUnit((height * 8 * 5) / 6, unit),
  //   fontSize: addUnit((height * 5) / 6, unit),
  //   marginBottom: addUnit((height * 0.1 * 5) / 6, unit),

  //   outerMargin: addUnit((height * M) / 100, unit),
  //   innerMargin: addUnit((height * L) / 100, unit),
  //   innerMarginRight: addUnit((height * L) / 100 + height * 0.5, unit),
  //   halfHeight: addUnit(height * 0.5, unit),
  // };

  console.log(2 * AM + 2 * FBW + TW, unit);
  const sizes = {
    bannerHeight: addUnit(BH, unit),

    fontSize: addUnit(FS, unit),
    textWidth: addUnit(TW, unit),
    marginBottom: addUnit(TU, unit),

    outerMargin: addUnit(OM, unit),
    innerMarginLeft: addUnit(LM, unit),
    innerMarginRight: addUnit(RM, unit),

    halfHeight: addUnit(BH / 2, unit),

    textBannerWidth: addUnit(TBW, unit),

    fullBannerWidth: addUnit(FBW, unit),
    fullBannerHeight: addUnit(BH + TU, unit),
  };
  return sizes;
}

// export function getBannerSizeByWidth(width: number, unit: string): textSizes {
//   // ToDO: make this really works, rather than a placeholder
//   const M: number = 30 / 2;
//   const L: number = 25 / 2;
//   const sizes = {
//     height: addUnit((width * 1.1 * 5) / 6, unit),

//     textWidth: addUnit((width * 8 * 5) / 6, unit),
//     fontSize: addUnit((width * 5) / 6, unit),
//     marginBottom: addUnit((width * 0.1 * 5) / 6, unit),
//     outerMargin: addUnit((width * M) / 100, unit),
//     innerMargin: addUnit((width * L) / 100, unit),
//     innerMarginRight: addUnit((width * 1.5 * L) / 100, unit),
//     halfHeight: addUnit(width * 0.5, unit),
//   };
//   return sizes;
// }
