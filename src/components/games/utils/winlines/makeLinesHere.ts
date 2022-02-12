import { boardBounds } from "../../interfaces/boardBounds";
import { lineSignature } from "../../interfaces/lineSignature";
import { boardStructure } from "../../interfaces/lineStructure";
import { tileCoords } from "../../interfaces/squareGame";
import { winLineGrid } from "../squareWinLines";
import { getLineStructure } from "./checkStructure";
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
