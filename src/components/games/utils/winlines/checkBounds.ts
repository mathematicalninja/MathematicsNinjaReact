import { boardBounds } from "../../interfaces/boardBounds";
import { lineSignature } from "../../interfaces/lineSignature";
import { tileCoords } from "../../interfaces/squareGame";

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

  const Y =
    point.y >= bounds.min.y && //
    point.y + sig.vertical * length <= bounds.max.y;

  return X && Y;
}
