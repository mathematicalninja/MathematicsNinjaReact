import { devLog } from "../../../../utils/devTools/devLog";
import {
  checkBounded,
  forceBounded,
} from "../../../../utils/maths/checkBounded";
import { xor } from "../../../../utils/maths/xor";
import { boardBounds } from "../../interfaces/boardBounds";
import { lineSignature } from "../../interfaces/lineSignature";
import { boardStructure } from "../../interfaces/lineStructure";
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
  bounds: boardBounds;
  sig: lineSignature;
  boardStructure: boardStructure;
}): winLineGrid {
  const xMin: Boolean = point.x == 0; // x isn't at the left
  const yMin: Boolean = point.y == 0; // y isn't at the top

  const xMax: Boolean = sig.horizontal * bounds.max.x == bounds.max.x; //x doesn't reach
  const yMax: Boolean = sig.vertical * bounds.max.y == bounds.max.y; //y doesn't reach the bottom right: ;

  let minValue, maxValue, length: number;

  switch (sigToType(sig)) {
    case "horizontal":
      devLog("H");
      if (!xMin || !xMax) {
        return [];
      }
      length = bounds.max.x;
      minValue = minHorizontal;
      maxValue = maxHorizontal;
      break;

    case "vertical":
      devLog("V");
      if (!yMin || !yMax) {
        return [];
      }
      length = bounds.max.y;
      minValue = minVertical;
      maxValue = maxVertical;
      break;

    case "diagonal":
      // FIXME: here's the error

      if (!(xMin || xMax || yMin || yMax)) {
        //none of the edges are touched
        devLog("Exit");
        return [];
      }
      length = getDiagonalLength({ bounds, point, sig });
      minValue = minDiagonal;
      maxValue = maxDiagonal;
      break;
  }
  devLog("here", point, bounds, length);
  devLog(
    "Bounds check: ",
    minValue,
    maxValue,
    length,
    !checkBounded(minValue, maxValue, length),
  );
  if (
    !checkBounds({ sig, bounds, point, length }) ||
    !checkBounded(minValue, maxValue, length)
  ) {
    devLog(
      "FINAL EXIT HERE!",
      !checkBounds({ sig, bounds, point, length }),
      !checkBounded(minValue, maxValue, length),
    );
    return [];
  }
  const Line = makeLineFromSig({ sig, point, length });
  devLog("LINE: ", Line);
  return [Line];
}
