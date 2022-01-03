import { bannerEnd } from "../../../utils/devTools/bannerEnd";
import { bannerStart } from "../../../utils/devTools/bannerStart";
import { logGridValues } from "../../../utils/devTools/logGridValues";
import { BoardState, squareWinner, tileCoords } from "../interfaces/squareGame";
import { getTile } from "./getSquareValue";
import { winLineGrid } from "./squareWinLines";

export interface CheckTileProps {
  board: BoardState;
  x: number;
  y: number;
}

/**
 * if this tile is full, returns null, otherwise returns the {x, y} of the lowest empty tile in the column
 */
export function fallingCheckTile({
  board,
  x,
  y,
}: CheckTileProps): tileCoords | null {
  console.log({ x, y });
  // note the use of n+!, due to HTML grid Layout rendering from the top right
  const val = getTile({ board: board, x: x, y: y });
  if (val !== null) {
    return null; //this tile is full, so the previous calling function should handle it.
  }

  if (y === board.squares[0].length - 1) {
    //this is the bottom row
    return { x, y };
  }

  // we need to check see if there's a tile in the row below
  const belowValue = getTile({
    board: board,
    x: x,
    y: y + 1,
  });

  if (typeof belowValue === "number") {
    // the tile below is full, so return this tile's {x, y}
    return { x: x, y: y };
  }

  return fallingCheckTile({
    board: board,
    x: x,
    y: y + 1,
  });
}

/**
 * if this tile is full, returns it's {x, y}, otherwise returns null
 */
export function staticCheckTile({
  board,
  x,
  y,
}: CheckTileProps): tileCoords | null {
  bannerStart("staticCheckTile");
  const R = getTile({
    board: board,
    x: x,
    y: y,
  });
  logGridValues(board.squares);
  bannerEnd("staticCheckTile");
  if (R === null) {
    return { x, y };
  }
  return null;
}
