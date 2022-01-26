import {
  BoardState,
  gridLayout,
  squareWinner,
  tileCoords,
} from "../interfaces/squareGame";
import calculateWinner from "./calculateSquareWinner";
import { CheckTileProps } from "./handleSquareClick";
import { addTileToGrid } from "./addToGrid";
import { winLineGrid } from "./squareWinLines";
import { bannerEnd } from "../../../utils/devTools/bannerEnd";
import { bannerStart } from "../../../utils/devTools/bannerStart";
import { logGridValues } from "../../../utils/devTools/logGridValues";

/**
 * checks a given tile, to see if it's full, otherwise calls "CheckTile" and returns a board to be added to the history
 */

export interface handleClickProps {
  player: number;
  Board: BoardState;
  x: number;
  y: number;
  CheckTile: (props: CheckTileProps) => tileCoords | null;
  winningLines: winLineGrid;
  addBoard: (newElement: BoardState) => void;
}

export function handleClick({
  Board,
  x,
  y,
  player,
  CheckTile,
  winningLines,
  addBoard,
}: handleClickProps): BoardState | null {
  bannerStart("handleClick");
  logGridValues(Board.squares);
  let T = CheckTile({ board: Board, x: x, y: y });
  if (T === null) {
    bannerEnd("handleClick");
    return null; // this tile is full.
  }
  T = cloneTile(T);
  // let B = Board; //FIXME: this is just coppying the old board's reference
  let B = cloneBoard(Board);
  // Generating the new board
  // T is the new tile, non-null
  B.moveList.push(T);
  B.currentTile = T;
  B.squares = addTileToGrid(player, B.squares, T);
  B.winner = calculateWinner(B, winningLines);

  addBoard(B); // adding the board to the history
  bannerEnd("handleClick");
  return B;
  // meed to add in a check for winners
}

function cloneBoard(Board: BoardState): BoardState {
  // guard(currentTile !== undefined);
  let currentTile: tileCoords | undefined;
  if (Board.currentTile === undefined) {
    currentTile = undefined;
  } else {
    currentTile = {
      x: Board.currentTile?.x,
      y: Board.currentTile?.y,
    };
  }
  // guard(winner !== null);
  let winner: squareWinner | null;
  if (Board.winner === null) {
    winner = null;
  } else {
    const player = Board.winner?.player;
    const line: tileCoords[] = Board.winner?.line.map(cloneTile);
    winner = { player, line };
  }

  const moveList = Board.moveList.map(cloneTile);

  const squares = cloneSquares(Board.squares);

  const R: BoardState = { currentTile, winner, moveList, squares };
  return R;
}

function cloneTile(tile: tileCoords): tileCoords {
  return { x: tile.x, y: tile.y };
}

function cloneSquares(squares: gridLayout): gridLayout {
  const R = squares.map((column) => {
    return cloneArray(column);
  });
  return R;
}

/**
 * this copies an array with PRIMITIVE values
 */
function cloneArray<T>(array: Array<T>): Array<T> {
  const R = array.map((value) => {
    return value;
  });
  return R;
}
