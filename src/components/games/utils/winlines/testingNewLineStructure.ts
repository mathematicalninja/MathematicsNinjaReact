import { max } from "../../../../utils/maths/max";
import { min } from "../../../../utils/maths/min";
import { boardBounds } from "../../interfaces/boardBounds";
import { lineSignature } from "../../interfaces/lineSignature";
import { boardStructure } from "../../interfaces/lineStructure";
import { tileCoords } from "../../interfaces/squareGame";
import { winLineGrid } from "../squareWinLines";
import sigToType from "./sigToType";

export function testingNewLineStructure({
  point,
  sig,
  boardStructure,
  boardMinMax,
}: {
  point: tileCoords;
  sig: lineSignature;
  boardStructure: boardStructure;
  boardMinMax: boardBounds;
}): winLineGrid {
  let min: number, max: number;
  let lineType: "fullOnly" | "subLines" | "none";
  let xMultiplier: 0 | 1;
  let yMultiplier: 0 | 1 | -1;
  switch (sigToType(sig)) {
    // Sets the min and max depending on the line type
    case "horizontal":
      min = boardStructure.minHorizontal;
      max = boardStructure.maxHorizontal;
      lineType = boardStructure.HorizontalType;
      xMultiplier = 1;
      yMultiplier = 0;
      break;

    case "vertical":
      min = boardStructure.minVertical;
      max = boardStructure.maxVertical;
      lineType = boardStructure.verticalType;
      xMultiplier = 0;
      yMultiplier = 1;
      break;

    case "diagonal":
      min = boardStructure.minDiagonal;
      max = boardStructure.maxDiagonal;
      lineType = boardStructure.diagonalType;
      xMultiplier = 1;
      yMultiplier = sig.vertical; //should be +1 or -1
      break;
  }
  if (lineType == "none") {
    return [];
  }
  let R: winLineGrid = [];
  // -----------------loop-----------------
  for (let length = min; length <= max; length++) {
    //   // looping between the min and max value
    if (lineType == "fullOnly") {
      // checks if line touches the edges only if the line needs to be a full line
      if (
        !checkTouchesEdges({
          point,
          length,
          xMultiplier,
          yMultiplier,
          boardMinMax,
        })
      ) {
        continue;
      }
    }

    if (
      //line is in bounds
      !checkLineIsInBounds({
        point,
        length,
        xMultiplier,
        yMultiplier,
        boardMinMax,
      })
    ) {
      continue;
    }

    //

    // const D = makeLineFromSig({ length, point, sig });

    R.push(makeLine({ point, length, xMultiplier, yMultiplier }));
    //
  }
  // -----------------loop-----------------

  return R;
}

function makeLine({
  point,
  length,
  xMultiplier,
  yMultiplier,
}: {
  point: tileCoords;
  length: number;
  xMultiplier: 0 | 1;
  yMultiplier: 0 | 1 | -1;
}): tileCoords[] {
  let Line: tileCoords[] = [];
  for (let i = 0; i < length; i++) {
    const x = point.x + i * xMultiplier;
    const y = point.y + i * yMultiplier;
    Line.push({ x, y });
  }
  return Line;
}

function checkTouchesEdges({
  point,
  length,
  xMultiplier,
  yMultiplier,
  boardMinMax,
}: {
  point: tileCoords;
  length: number;
  xMultiplier: 0 | 1;
  yMultiplier: 0 | 1 | -1;
  boardMinMax: boardBounds;
}): boolean {
  const { xMin, yMin, xMax, yMax } = getLineEnds({
    point,
    length,
    xMultiplier,
    yMultiplier,
  });
  let xMinCheck: boolean = xMin == boardMinMax.min.x;
  let xMaxCheck: boolean = xMax == boardMinMax.max.x;
  let yMinCheck: boolean = yMin == boardMinMax.min.y;
  let yMaxCheck: boolean = yMax == boardMinMax.max.y;

  if (xMultiplier == 0) {
    //no horizontal movement i.e. vertical line, so only y checks
    return yMinCheck && yMaxCheck;
  } else if (yMultiplier == 0) {
    //no vertical movement i.e. horizontal line, so only x checks
    return xMinCheck && xMaxCheck;
  } else {
    // diagonal line
    // xMultiplier =1
    // yMultiplier =1|-1
    let startCheck: boolean;
    let endCheck: boolean;
    switch (yMultiplier) {
      case 1:
        //Line is increasing in both, so it starts at (x or y)'s min and goes to (x or y)'s max
        startCheck = xMinCheck || yMinCheck;
        endCheck = xMaxCheck || yMaxCheck;
        break;
      case -1:
        // increasing in x, so may start at xMin, may end at xMax
        // decreasing in y, so may start at yMax, may end at yMin
        startCheck = xMinCheck || yMaxCheck;
        endCheck = xMaxCheck || yMinCheck;
        break;
    }
    return startCheck && endCheck;
  }
}

function checkLineIsInBounds({
  point,
  length,
  xMultiplier,
  yMultiplier,
  boardMinMax,
}: {
  point: tileCoords;
  length: number;
  xMultiplier: 0 | 1;
  yMultiplier: 0 | 1 | -1;
  boardMinMax: boardBounds;
}): boolean {
  // set yMin and yMax independent of direction
  const { xMin, yMin, xMax, yMax } = getLineEnds({
    point,
    length,
    xMultiplier,
    yMultiplier,
  });

  // case: xMax < grid x max
  const X: boolean = xMax <= boardMinMax.max.x;

  // case: final point's y < grid y max
  const Yx: boolean = yMax <= boardMinMax.max.y;

  // case: yMin is non-negative
  const Yn: boolean = yMin >= boardMinMax.min.y;

  return X && Yx && Yn;
}

function getLineEnds({
  point,
  length,
  xMultiplier,
  yMultiplier,
}: {
  point: tileCoords;
  length: number;
  xMultiplier: 0 | 1;
  yMultiplier: 0 | 1 | -1;
}): { xMin: number; xMax: number; yMin: number; yMax: number } {
  const xMin: number = point.x;
  const xMax: number = point.x + (length - 1) * xMultiplier;
  const yMin: number = min(point.y, point.y + (length - 1) * yMultiplier);
  const yMax: number = max(point.y, point.y + (length - 1) * yMultiplier);
  return { xMin, xMax, yMin, yMax };
}
