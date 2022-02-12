import { devLog } from "../../../../utils/devTools/devLog";
import { boardBounds } from "../../interfaces/boardBounds";
import { lineSignature } from "../../interfaces/lineSignature";
import { boardStructure } from "../../interfaces/lineStructure";
import { tileCoords } from "../../interfaces/squareGame";
import { winLineGrid } from "../squareWinLines";
import { getLineStructure } from "./checkStructure";
import { fullLine } from "./fullLine";
import sigToType from "./sigToType";
import { subLine } from "./subLine";
import { testingNewLineStructure } from "./testingNewLineStructure";

export function makeLinesHere({
  point,
  sig,
  boardStructure,
  boardMinMax,
}: {
  point: tileCoords;
  sig: lineSignature;
  boardStructure: boardStructure;
  boardMinMax: boardBounds;
}): winLineGrid {
  // Makes line(s) (Horizontal, Vertical or Diagonal) based on the signature given and whether that signature allows only full lines, partial lines or no lines
  const lineStructure = getLineStructure({ boardStructure, sig });
  devLog(
    `makeLinesHere [${point.x}, ${point.y}]`,
    sigToType(sig),
    sig,
    lineStructure,
  );
  return testingNewLineStructure({
    point,
    sig,
    boardStructure,
    boardMinMax,
  });
  // switch (lineStructure) {
  //   case "none":
  //     return [];
  //   case "subLines":
  //     return subLine({ sig, point, bounds, boardStructure });
  //   case "fullOnly":
  //     return fullLine({ bounds, point, sig, boardStructure });
  // }
}
