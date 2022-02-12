import { checkBounded } from "../../../../utils/maths/checkBounded";
import { max } from "../../../../utils/maths/max";
import { min } from "../../../../utils/maths/min";
import { boardBounds } from "../../interfaces/boardBounds";
import { lineSignature } from "../../interfaces/lineSignature";
import { boardStructure } from "../../interfaces/lineStructure";
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
  boardStructure: {
    minHorizontal,
    maxHorizontal,
    minVertical,
    maxVertical,
    minDiagonal,
    maxDiagonal,
  },
}: {
  point: tileCoords;
  bounds: boardBounds; // the min and max length allowed for a line
  sig: lineSignature;
  boardStructure: boardStructure;
}): winLineGrid {
  const valueBounds = {
    min: {
      x: min(point.x, point.x + sig.horizontal * bounds.max.x),
      y: min(point.y, point.y + sig.vertical * bounds.max.y),
    },
    max: {
      x: max(point.x, point.x + sig.horizontal * bounds.max.x),
      y: max(point.y, point.y + sig.vertical * bounds.max.y),
    },
  };
  const xMin: Boolean = valueBounds.min.x == bounds.min.x; // x isn't at the left: ;
  const yMin: Boolean = valueBounds.min.y == bounds.min.y; // y isn't at the top

  const xMax: Boolean = valueBounds.max.x == bounds.max.x; //x doesn't reach
  const yMax: Boolean = valueBounds.max.y == bounds.max.y; //y doesn't reach the bottom right: ;

  // can have negative values here

  let minValue, maxValue, length: number;

  switch (sigToType(sig)) {
    case "horizontal":
      if (!xMin || !xMax) {
        return [];
      }
      length = bounds.max.x;
      minValue = minHorizontal;
      maxValue = maxHorizontal;
      break;

    case "vertical":
      if (!yMin || !yMax) {
        return [];
      }
      length = bounds.max.y;
      minValue = minVertical;
      maxValue = maxVertical;
      break;

    case "diagonal":
      if ((!xMin && !xMax) || (!yMin && !yMax)) {
        //none of the edges are touched
        return [];
      }
      length = getDiagonalLength({ bounds, point, sig });
      minValue = minDiagonal;
      maxValue = maxDiagonal;
      break;
  }

  if (
    !checkBounds({ sig, bounds, point, length }) ||
    !checkBounded(minValue, maxValue, length)
  ) {
    return [];
  }
  const Line = makeLineFromSig({ sig, point, length });
  return [Line];
}
