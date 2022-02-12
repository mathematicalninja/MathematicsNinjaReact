import { boardBounds } from "../../interfaces/boardBounds";
import { lineSignature } from "../../interfaces/lineSignature";
import { boardStructure } from "../../interfaces/lineStructure";
import { tileCoords } from "../../interfaces/squareGame";
import { winLineGrid } from "../squareWinLines";
import { checkBounds } from "./checkBounds";
import { makeLineFromSig } from "./makeLineFromSig";
import sigToType from "./sigToType";

export function subLine({
  sig,
  boardStructure,
  point,
  bounds,
}: {
  sig: lineSignature;
  boardStructure: boardStructure;
  point: tileCoords;
  bounds: boardBounds;
}): winLineGrid {
  let min, max: number;
  let lineType: "fullOnly" | "subLines" | "none";
  switch (sigToType(sig)) {
    // Sets the min and max depending on the line type
    case "horizontal":
      min = boardStructure.minHorizontal;
      max = boardStructure.maxHorizontal;
      lineType = boardStructure.HorizontalType;
      break;

    case "vertical":
      min = boardStructure.minVertical;
      max = boardStructure.maxVertical;
      lineType = boardStructure.verticalType;
      break;

    case "diagonal":
      min = boardStructure.minDiagonal;
      max = boardStructure.maxDiagonal;
      lineType = boardStructure.diagonalType;
      break;
  }

  let R: winLineGrid = [];
  //
  if (lineType == "none") {
    return R;
  }
  for (let length = min; length <= max; length++) {
    // looping between the min and max value
    //
    if (!checkBounds({ sig, point, bounds, length })) {
      break;
    }

    // TODO:here I can add in a switch for none/sub/full lines

    const D = makeLineFromSig({ length, point, sig });
    R = R.concat([D]);
  }
  return R;
}
