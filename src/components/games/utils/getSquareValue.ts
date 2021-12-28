import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { logTileValue } from "../../../utils/devTools/logTileValue";
import { BoardState, gridLayout, tileCoords } from "../interfaces/squareGame";

/** returns the value of the tile (null if empty) */
export function getTile({
  board,
  x,
  y,
}: {
  board: BoardState;
  x: number;
  y: number;
}): number | null {
  logTileValue({ x, y }, board.squares);
  return board.squares[x][y];
}

export function getTileNew({
  grid,
  tile,
}: {
  grid: gridLayout;
  tile: tileCoords;
}) {
  logTileValue(tile, grid);
  return grid[tile.x][tile.y];
}
