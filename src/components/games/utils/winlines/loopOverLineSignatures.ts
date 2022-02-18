import { boardBounds } from "../../interfaces/boardBounds";
import {
  downDiag,
  horizLine as horizLine,
  lineSignature,
  upDiag,
  vertLine,
} from "../../interfaces/lineSignature";
import { boardStructure } from "../../interfaces/lineStructure";
import { tileCoords } from "../../interfaces/squareGame";
import { winLineGrid } from "../squareWinLines";
import { makeLinesHere } from "./makeLinesHere";

export function loopOverLineSignatures({
  point,
  boardStructure,
  boardMinMax,
}: {
  point: tileCoords;
  boardStructure: boardStructure;
  boardMinMax: boardBounds;
}): winLineGrid {
  /*  for each line signature, check it then make it if viable.*/
  const SIGS: lineSignature[] = [vertLine, horizLine, downDiag, upDiag];

  let R: winLineGrid = [];

  SIGS.forEach((sig) => {
    R = R.concat(
      makeLinesHere({
        point,
        sig,
        boardStructure,
        boardMinMax,
      }),
    );
  });
  return R;
}
