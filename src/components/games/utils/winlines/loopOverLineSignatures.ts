import { boardBounds } from "../../interfaces/boardBounds";
import {
  downDiag,
  horzLine,
  lineSignature,
  upDiag,
  vertLine,
} from "../../interfaces/lineSignature";
import { boardStructure } from "../../interfaces/lineStructure";
import { tileCoords } from "../../interfaces/squareGame";
import { winLineGrid } from "../squareWinLines";
import { getLineStructure } from "./checkStructure";
import { makeLineFromSig } from "./makeLineFromSig";
import { makeLinesHere } from "./makeLinesHere";
import sigToType from "./sigToType";

export function loopOverLineSignatures({
  length,
  point,
  boardStructure,
  bounds,
}: {
  length: number;
  point: tileCoords;
  boardStructure: boardStructure;
  bounds: boardBounds;
}): winLineGrid {
  /*  for each line signature, check it then make it if viable.*/
  const SIGS: lineSignature[] = [vertLine, horzLine, downDiag, upDiag];

  let R: tileCoords[][] = [];

  SIGS.forEach((sig) => {
    R = R.concat(
      makeLinesHere({
        point,
        sig,
        boardStructure,
        bounds,
      }),
    );
  });
  return R;
}
