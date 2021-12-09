import {
  BoardState,
  gridLayout,
  squareWinner,
  tileCoords,
} from "../interfaces/squareGame";
import calculateWinner from "./calculateSquareWinner";
import { getTile } from "./getSquareValue";
import { winLineGrid } from "./squareWinLines";

export interface CheckTileProps {
  board: gridLayout;
  x: number;
  y: number;
}

interface handleClickProps {
  player: number;
  Board: BoardState;
  x: number;
  y: number;
  CheckTile: (props: CheckTileProps) => tileCoords | null;
  winningLines: winLineGrid;
}

/**
 * a way to add a tile to the grid in case it's interface changes
 */
function addToGrid(
  player: number,
  grid: gridLayout,
  tile: tileCoords,
): gridLayout {
  //
  const v = grid[tile.x][tile.y];
  let G = grid;
  if (v === null) {
    G[tile.x][tile.y] = player;
  } else {
    // still need an escape clause for if this hits an error
  }
  return G;
}

/**
 * checks a given tile, to see if it's full, otherwise calls "CheckTile" and returns a board to be added to the history
 */
export function handleClick({
  Board,
  x,
  y,
  player,
  CheckTile,
  winningLines,
}: handleClickProps): BoardState | null {
  const T = CheckTile({ board: Board.squares, x: x, y: y });
  if (T === null) {
    return null; // this tile is full.
  }
  let B = Board;
  // T is the new tile, non-null
  B.moveList.push(T);
  B.currentTile = T;
  B.squares = addToGrid(player, Board.squares, { x: x, y: y });
  B.winner = calculateWinner(B, winningLines);

  return B;
  // meed to add in a check for winners
}

/**
 * if this tile is full, returns null, otherwise returns the {x, y} of the lowest empty tile in the column
 */
export function fallingCheckTile({
  board,
  x,
  y,
}: CheckTileProps): tileCoords | null {
  const val = getTile({ grid: board, x: x, y: y });
  if (val !== null) {
    return null; //this tile is full, so the previous calling function should handle it.
  }

  if (y === 0) {
    //this is the bottom row
    return { x, y };
  }

  // we need to check see if there's a tile in the row below
  const belowValue = getTile({
    grid: board,
    x: x,
    y: y - 1,
  });

  if (typeof belowValue === "number") {
    // the tile below is full, so return this tile's {x, y}
    return { x: x, y: y };
  }

  return fallingCheckTile({
    board: board,
    x: x,
    y: y - 1,
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
  const R = getTile({
    grid: board,
    x: x,
    y: y,
  });
  if (R === null) {
    return { x, y };
  }
  return null;
}
