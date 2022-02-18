import abs from "../../../../utils/maths/abs";
import { min } from "../../../../utils/maths/min";
import { boardBounds } from "../../interfaces/boardBounds";
import { lineSignature } from "../../interfaces/lineSignature";
import { tileCoords } from "../../interfaces/squareGame";

export function getDiagonalLength({
  point,
  bounds,
  sig,
}: {
  point: tileCoords;
  bounds: boardBounds;
  sig: lineSignature;
}): number {
  //
  const xEnd = sig.horizontal ? bounds.max.x : point.x;
  let yLen: number;
  switch (sig.vertical) {
    case 0:
      yLen = 0; // no y change in the line
      break;

    case -1:
      yLen = abs(bounds.min.y - point.y); // the line goes down to yMin
      break;

    case 1:
      yLen = abs(bounds.max.y - point.y); // the line goes up to yMax
      break;
  }
  // const xLen = abs(point.x - xEnd);
  const xLen = sig.horizontal ? abs(point.x - xEnd) : 0;
  if (xLen == 0) {
    return yLen;
  } // xLen > 0
  if (yLen == 0) {
    return xLen;
  } // both lengths are positive
  return min(xLen, yLen); // which length is shorter shows witch edge is hit first
}
