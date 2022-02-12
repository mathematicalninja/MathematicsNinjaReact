import { bannerEnd } from "../../../../utils/devTools/banner";
import { bannerStart } from "../../../../utils/devTools/banner";
import { devLog } from "../../../../utils/devTools/devLog";
import {
  checkBounded,
  forceBounded,
} from "../../../../utils/maths/checkBounded";
import { max } from "../../../../utils/maths/max";
import { min } from "../../../../utils/maths/min";
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
  bounds: boardBounds; // the min and max length allowed for a line
  sig: lineSignature;
  boardStructure: boardStructure;
}): winLineGrid {
  bannerStart("fullLine", `[${point.x}, ${point.y}]`);

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

  devLog("valueBounds: ", valueBounds.min, valueBounds.max);
  // can have negative values here

  let minValue, maxValue, length: number;

  switch (sigToType(sig)) {
    case "horizontal":
      devLog("H");
      if (!xMin || !xMax) {
        devLog("!H");
        return [];
      }
      length = bounds.max.x;
      minValue = minHorizontal;
      maxValue = maxHorizontal;
      break;

    case "vertical":
      devLog("V");
      if (!yMin || !yMax) {
        devLog("!V");
        return [];
      }
      length = bounds.max.y;
      minValue = minVertical;
      maxValue = maxVertical;
      break;

    case "diagonal":
      devLog("D", `x: ${xMin}, ${xMax} y: ${yMin}, ${yMax}`);
      devLog(
        valueBounds.max.x,
        bounds.max.x,
        valueBounds.max.x == bounds.max.x,

        point.x,
        sig.horizontal * bounds.max.x,
        sig.horizontal,
        bounds.max.x,
      );
      // FIXME: here's the error

      if ((!xMin && !xMax) || (!yMin && !yMax)) {
        //none of the edges are touched
        devLog("!D");
        return [];
      }
      length = getDiagonalLength({ bounds, point, sig });
      minValue = minDiagonal;
      maxValue = maxDiagonal;
      break;
  }
  bannerStart("passed sig check", `[${point.x},${point.y}]`);
  devLog("here", point, bounds, length);
  devLog(
    "Bounds check: ",
    minValue,
    maxValue,
    length,
    checkBounded(minValue, maxValue, length),
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

  bannerStart("passed bound check", `[${point.x},${point.y}]`);

  const Line = makeLineFromSig({ sig, point, length });
  devLog("LINE: ", Line);
  // devLog(`---fullLine end   [${point.x}, ${point.y}]---`);
  bannerEnd("fullLine", `[${point.x}, ${point.y}]`);
  return [Line];
}
