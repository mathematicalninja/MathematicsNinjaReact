import { gridSizeToTileArray } from "../../../../utils/arrays/gridSizeToTileArray";
import sortDoubleArray from "../../../../utils/arrays/sort";
import { devLog } from "../../../../utils/devTools/devLog";
import { isBadArray } from "../../../../utils/react/isBadArray";
import { gridLayout, tileCoords } from "../../interfaces/squareGame";
import { winLineGrid } from "../squareWinLines";

interface diagonalsInput {
  minDiag: number;
  maxDiag: number;

  yWidth: number;
  xWidth: number;

  gridSize: tileCoords;

  // gridLayout: gridLayout;
}

// TODO: connect4 now works, but havn't accounted for major Diagonals being only from side to side. So 4x4 TicTac doesn't work

function diagonals({ minDiag, yWidth, gridSize }: diagonalsInput): winLineGrid {
  let R: winLineGrid = [];
  const Tiles: tileCoords[] = gridSizeToTileArray(gridSize);

  Tiles.forEach((tile) => {
    const D: tileCoords[][] = makeThisDiag({
      diagLength: minDiag,
      xMax: gridSize.x - 1,
      xStart: tile.x,
      yMax: gridSize.y - 1,
      yMin: 0,
      yStart: tile.y,
    });
    R = R.concat(D);
  });

  return R;
  // add minor \diagonals length>=3
  if (minDiag >= 3) {
    // d ranges between the minLength of a diagonal, and the minWidth of the grid
    // minWidth -d = length of this minor diagonal
    for (let d = minDiag - 3; d >= 3 - minDiag; d--) {
      let minorDiag: tileCoords[] = [];

      for (let y = 0; y < yWidth; y++) {
        let tileIndex = y * (1 + gridSize[1]) + d;
        if (
          // doesn't go off of the left
          tileIndex >= y * gridSize[1] &&
          //doesn't go off of the right
          tileIndex < (y + 1) * gridSize[1]
        ) {
          minorDiag.push({ x: tileIndex - y * gridSize[1], y: y });
        }
      }
      if (!isBadArray(minorDiag)) {
        R.push(minorDiag);
      }
    }
  }

  // add /diagonal
  // let diagTwo = []
  // for (let k = 0; k < gridSize; k++) {
  //     diagTwo.push([(gridSize - k - 1), k])
  //     // diagTwo.push((gridSize - k - 1) + k * gridSize)
  // }
  // winLines.push(diagTwo)
  // add minor /diagonals length>=3
  if (gridSize[0] >= 3) {
    // d is the range of differences in size (between 3 and gridSize), so gridSize-d is the length of the minor diagonal
    for (let d = gridSize[0] - 3; d >= 3 - gridSize[0]; d--) {
      let minorDiag: tileCoords[] = [];

      for (let y = 0; y < yWidth; y++) {
        let tileIndex = gridSize[0] - y - 1 + y * gridSize[0] + d;
        if (
          // doesn't go off of the left
          tileIndex >= y * gridSize[0] &&
          //doesn't go off of the right
          tileIndex < (y + 1) * gridSize[0]
        ) {
          minorDiag.push({ x: tileIndex - y * gridSize[0], y: y });
          // minorDiag.push(tileIndex)
        }
      }
      if (!isBadArray(minorDiag)) {
        R.push(minorDiag);
      }
    }
  }
  return sortDoubleArray(R);
}

export default diagonals;

//
//
//
//
//
//
//

//
//
//
//
//
//
function checkDiagonalUp({
  xStart,
  xMax,
  yStart,
  yMax,
  diagLength,
}: {
  xStart: number;
  xMax: number;
  yStart: number;
  yMax: number;
  diagLength: number;
}): Boolean {
  // y coord is going up
  if (xStart + (diagLength - 1) > xMax) {
    return false;
  }
  if (yStart + (diagLength - 1) > yMax) {
    return false;
  }
  return true;
}
// function makeDiagonalUp(
//   xStart: number,
//   yStart: number,
//   diagLength: number,
// ): tileCoords[] {
//   let R: tileCoords[] = [];
//   for (let i = 0; i < diagLength; i++) {
//     const x = xStart + i;
//     const y = yStart + i;
//     R.push({ x, y });
//   }
//   return R;
// }

function checkDiagonalDown({
  xStart,
  xMax,
  yStart,
  yMin,
  diagLength,
}: {
  xStart: number;
  xMax: number;
  yStart: number;
  yMin: number;
  diagLength: number;
}): Boolean {
  // y coord is going down
  if (xStart + (diagLength - 1) > xMax) {
    return false;
  }
  if (yStart - (diagLength - 1) < yMin) {
    return false;
  }
  return true;
}

// function makeDiagonalDown(
//   xStart: number,
//   yStart: number,
//   diagLength: number,
// ): tileCoords[] {
//   let R: tileCoords[] = [];
//   for (let i = 0; i < diagLength; i++) {
//     const x = xStart + i;
//     const y = yStart - i;
//     R.push({ x, y });
//   }
//   return R;
// }

function makeDiagonalSigned({
  xStart,
  yStart,
  sign,
  diagLength,
}: {
  xStart: number;
  yStart: number;
  sign: 1 | -1;
  diagLength: number;
}): tileCoords[] {
  let R: tileCoords[] = [];
  for (let i = 0; i < diagLength; i++) {
    const x = xStart + i;
    const y = yStart + i * sign;
    R.push({ x, y });
  }
  return R;
}

function makeThisDiag({
  xStart,
  xMax,

  yStart,
  yMin,
  yMax,

  diagLength,
}: {
  xStart: number;
  xMax: number;

  yStart: number;
  yMin: number;
  yMax: number;

  diagLength: number;
}): tileCoords[][] {
  let R: tileCoords[][] = [];
  if (checkDiagonalUp({ diagLength, yStart, yMax, xStart, xMax })) {
    R.push(makeDiagonalSigned({ xStart, yStart, diagLength, sign: 1 }));
  }
  if (checkDiagonalDown({ diagLength, xStart, yStart, yMin, xMax })) {
    R.push(makeDiagonalSigned({ sign: -1, yStart, xStart, diagLength }));
  }

  return R;
}
