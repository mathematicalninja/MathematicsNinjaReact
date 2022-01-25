import { xor } from "../../../../utils/maths/xor";
import { boardBounds } from "../../interfaces/boardBounds";
import { lineSignature } from "../../interfaces/lineSignature";
import { lineTypes } from "../../interfaces/lineType";
import { tileCoords } from "../../interfaces/squareGame";
import { winLineGrid } from "../squareWinLines";
import { checkBounds } from "./checkBounds";
import { getDiagonalLength } from "./getDiagonalLength";
import { makeLineFromSig } from "./makeLineFromSig";
import sigToType from "./sigToType";

export function fullLine({
  point,
  bounds,
  sig,
}: {
  point: tileCoords;
  bounds: boardBounds;
  sig: lineSignature;
}): winLineGrid {
  const xMin: Boolean = point.x == 0; // x isn't at the left
  const yMin: Boolean = point.y == 0; // y isn't at the top

  const xMax: Boolean = sig.horizontal * bounds.max.x == bounds.max.x; //x doesn't reach
  const yMax: Boolean = sig.vertical * bounds.max.y == bounds.max.y; //y doesn't reach the bottom right: ;

  let length: number;

  switch (sigToType(sig)) {
    case "horizontal":
      if (!xMin || !xMax) {
        return [];
      }
      length = bounds.max.x;
      break;

    case "vertical":
      if (!yMin || !yMax) {
        return [];
      }
      length = bounds.max.y;
      break;

    case "diagonal":
      if (!(xor(xMin, xMax) && xor(yMin, yMax))) {
        // NOT(
        // starting XOR ending at xBounds
        // AND
        // starting XOR ending at yBounds
        // )
        return [];
      }
      length = getDiagonalLength({ bounds, point, sig });
      break;
  }
  return [makeLineFromSig({ sig, point, length })];
}
