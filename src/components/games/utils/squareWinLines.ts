import { max } from "../../../utils/maths/max";
import { min } from "../../../utils/maths/min";
import { gridLayout, tileCoords } from "../interfaces/squareGame";

// TODO: doesn't account for minimun Vertical or Horizontal line length

/**
 Checks if the max diagonal is undefined.
 If so: returns longest side length.
 */
function checkMaxDiagonal(props: { maxDiag?: number; long: number }): number {
  let R = 0;
  if (typeof props.maxDiag === "undefined") {
    R = props.long;
  } else {
    R = props.maxDiag;
  }
  return R;
}
/**
 Checks if the min diagonal is undefined.
 If so: returns shortest side length or 3, whichever is smaller.
 */
function checkMinDiagonal(props: { minDiag?: number; short: number }): number {
  let R = 0;
  if (typeof props.minDiag === "undefined") {
    R = min(props.short, 3);
  } else {
    R = props.minDiag;
  }
  return R;
}

interface winLineSingle extends Array<tileCoords> {}
export interface winLineGrid extends Array<winLineSingle> {}

interface winLinesInput {
  gridSize: tileCoords;
  minDiagonalLength?: number;
  maxDiagonalLength?: number;
}
/**
 * creates the winning lines for a square grid with the diagonal lengths possibly restricted
 */
export function makeWinLines({
  gridSize,
  minDiagonalLength,
  maxDiagonalLength,
}: winLinesInput): winLineGrid {
  // old implementation still in tack---> needs to be refactored to gridSize =[x,y] widths

  // placeholder variable, to allow code to be tested
  // let gridSize = gridSize[0];

  // from here stems the flow of changes.

  const [xWidth, yWidth] = [gridSize.x, gridSize.y];
  const [shortSide, longSide] = [min(xWidth, yWidth), max(xWidth, yWidth)];

  const minDiag = checkMinDiagonal({
    minDiag: minDiagonalLength,
    short: shortSide,
  });
  const maxDiag = checkMaxDiagonal({
    maxDiag: maxDiagonalLength,
    long: longSide,
  });

  let winLines: winLineGrid = [];
  // add rows
  for (let y = 0; y < yWidth; y++) {
    let winRow: tileCoords[] = [];
    for (let x = 0; x < xWidth; x++) {
      winRow.push({ x: x, y: y });
    }
    if (!isBadArray(winRow)) {
      winLines.push(winRow);
    }
  }
  // add columns
  for (let x = 0; x < xWidth; x++) {
    let winColumn: tileCoords[] = [];
    for (let y = 0; y < yWidth; y++) {
      winColumn.push({ x: x, y: y });
    }
    if (!isBadArray(winColumn)) {
      winLines.push(winColumn);
    }
  }

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
        winLines.push(minorDiag);
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
        winLines.push(minorDiag);
      }
    }
  }
  return winLines;
}

function isBadArray(array: any[]) {
  if (!array) {
    return true;
  }
  if (array.length == 0) {
    return true;
  }
  return false;
}
