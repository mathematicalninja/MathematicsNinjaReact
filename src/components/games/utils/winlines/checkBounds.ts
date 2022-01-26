import { boardBounds } from "../../interfaces/boardBounds";
import { lineSignature } from "../../interfaces/lineSignature";
import { tileCoords } from "../../interfaces/squareGame";

/*
 * returns true if a line's min and max x and y values are inside the bounds of the board
 */
export function checkBounds({
  sig,
  bounds,
  point,
  length,
}: {
  sig: lineSignature;
  bounds: boardBounds;
  point: tileCoords;
  length: number;
}): Boolean {
  const X =
    point.x >= bounds.min.x &&
    point.x + sig.horizontal * length <= bounds.max.x;

  let Y: Boolean;
  switch (sig.vertical) {
    case -1:
      Y =
        point.y <= bounds.max.y && //
        point.y + length >= bounds.min.y;

      break;

    case 1:
    case 0:
      Y =
        point.y >= bounds.min.y && //
        point.y + length <= bounds.max.y;
      break;
  }

  return X && Y;
}
