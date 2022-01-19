import {
  gridLayout,
  tileCoords,
} from "../../components/games/interfaces/squareGame";

export function gridSizeToTileArray(gridSize: tileCoords): tileCoords[] {
  let R: tileCoords[] = [];
  for (let x = 0; x < gridSize.x; x++) {
    for (let y = 0; y < gridSize.y; y++) {
      R.push({ x, y });
    }
  }

  return R;
}

export function tileGridToArray(grid: gridLayout): tileCoords[] {
  let R: tileCoords[] = [];

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      R.push({ x, y });
    }
  }
  return R;
}
