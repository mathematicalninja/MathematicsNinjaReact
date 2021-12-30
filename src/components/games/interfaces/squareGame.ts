/**
 * {x, y} numbers
 */
export interface tileCoords {
  x: number;
  y: number;
}

/**
 * Array of winning Lines
 *  : Array<Array< number|null >>
 */

export interface gridLayout extends Array<Array<number | null>> {}

export interface squareWinner {
  player: number;
  line: tileCoords[];
}

export interface BoardState {
  squares: gridLayout;

  moveList: tileCoords[];
  currentTile?: tileCoords;

  winner: squareWinner | null;
}

export interface tileAndBoard {
  tile: tileCoords;
  board: BoardState;
}
