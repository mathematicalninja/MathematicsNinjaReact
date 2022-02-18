import { lineSignature } from "../../interfaces/lineSignature";
import { tileCoords } from "../../interfaces/squareGame";

export function makeLineFromSig({
  point,
  length,
  sig,
}: {
  point: tileCoords;
  length: number;
  sig: lineSignature;
}): tileCoords[] {
  let R: tileCoords[] = [];
  for (let i = 0; i < length; i++) {
    const x = point.x + i * sig.horizontal;
    const y = point.y + i * sig.vertical;
    R.push({ x, y });
  }
  return R;
}
