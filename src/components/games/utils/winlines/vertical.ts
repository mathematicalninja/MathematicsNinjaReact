import { isBadArray } from "../../../../utils/react/isBadArray";
import { tileCoords } from "../../interfaces/squareGame";
import { winLineGrid } from "../squareWinLines";

interface verticalInput {
  xWidth: number;
  yWidth: number;
  minVerticalLength?: number;
  maxVerticalLength?: number;
}

function vertical({
  xWidth,
  yWidth,
  minVerticalLength,
  maxVerticalLength,
}: verticalInput): winLineGrid {
  let R: winLineGrid = [];

  for (let x = 0; x < xWidth; x++) {
    let winColumn: tileCoords[] = [];
    for (let y = 0; y < yWidth; y++) {
      winColumn.push({ x: x, y: y });
    }
    if (!isBadArray(winColumn)) {
      R.push(winColumn);
    }
  }
  return R;
}

export default vertical;

function addVertical(
  xStart: number,
  yStart: number,
  length: number,
): tileCoords[] {
  let R: tileCoords[] = [];
  for (let y = yStart; y < xStart + (length - 1); y++) {
    R.push({ x: xStart, y: y });
  }
  return R;
}

function checkVertical(yStart: number, yMax: number, length: number): Boolean {
  return yStart + (length - 1) <= yMax;
}
