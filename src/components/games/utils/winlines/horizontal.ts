import { gridSizeToTileArray } from "../../../../utils/arrays/gridSizeToTileArray";
import { devLog } from "../../../../utils/devTools/devLog";
import { isBadArray } from "../../../../utils/react/isBadArray";
import { tileCoords } from "../../interfaces/squareGame";
import { winLineGrid } from "../squareWinLines";

interface horizontalInput {
  xWidth: number;
  yWidth: number;

  minHorizontalLength?: number;
  maxHorizontalLength?: number;
}

function horizontal({
  xWidth,
  yWidth,
  minHorizontalLength,
  maxHorizontalLength,
}: horizontalInput): winLineGrid {
  let R: winLineGrid = [];
  // const G = gridSizeToTileArray({ x: xWidth, y: yWidth });
  // G.forEach((tile) => {
  //   const T = addHorizontals({
  //     xWidth: xWidth,
  //     xStart: tile.x,

  //     yStart: tile.y,

  //     minHorizontalLength: minHorizontalLength ? minHorizontalLength : xWidth,
  //     maxHorizontalLength: maxHorizontalLength ? maxHorizontalLength : xWidth,
  //   });
  //   // let winRow: tileCoords[] = makeHorizonal(xStart, yStart, length);
  //   if (!isBadArray(T)) {
  //     // devLog("T", T);
  //     R = R.concat(T);
  //   }
  // });

  for (let y = 0; y < yWidth; y++) {
    let winRow: tileCoords[] = [];
    for (let x = 0; x < xWidth; x++) {
      winRow.push({ x: x, y: y });
    }
    if (!isBadArray(winRow)) {
      R.push(winRow);
    }
  }
  return R;
}

export default horizontal;

function makeHorizontal({
  xStart,
  yStart,
  length,
}: {
  xStart: number;
  yStart: number;
  length: number;
}): tileCoords[] {
  let R: tileCoords[] = [];
  for (let x = xStart; x <= xStart + (length - 1); x++) {
    R.push({ x: x, y: yStart });
  }
  return R;
}
function checkHorizontal({
  xStart,
  xMax,
  length,
}: {
  xStart: number;
  xMax: number;
  length: number;
}): Boolean {
  return xStart + (length - 1) <= xMax;
}

function addHorizontals({
  xWidth,
  xStart,

  yStart,

  minHorizontalLength,
  maxHorizontalLength,
}: {
  xWidth: number;
  xStart: number;

  yStart: number;

  minHorizontalLength: number;
  maxHorizontalLength: number;
}): winLineGrid {
  let R: winLineGrid = [];
  for (
    let length = minHorizontalLength;
    length <= maxHorizontalLength;
    length++
  ) {
    // devLog({ length });
    if (
      !checkHorizontal({
        length,
        xMax: xWidth,
        xStart,
      })
    ) {
      continue;
    }

    const T: tileCoords[] = makeHorizontal({
      xStart,
      yStart,
      length,
    });
    if (isBadArray(T)) {
      continue;
    }
    R.push(T);
  }

  return R;
}
