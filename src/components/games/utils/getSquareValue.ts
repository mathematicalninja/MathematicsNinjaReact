import { gridLayout } from "../interfaces/squareGame";

/** returms the value of the tile (null if empty) */
export function getTile({
  grid,
  x,
  y,
}: {
  grid: gridLayout;
  x: number;
  y: number;
}): number | null {
  return grid[x][y];
}
