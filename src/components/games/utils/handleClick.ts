import { BoardState, tileCoords } from "../interfaces/squareGame";
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
  const T = CheckTile({ board: Board, x: x, y: y });
  if (T === null) {
    bannerEnd("handleClick");
    return null; // this tile is full.
  }
  let B = Board; // Generating the new board
  // T is the new tile, non-null
  B.moveList.push(T);
  B.currentTile = T;
  B.squares = addTileToGrid(player, Board.squares, T);
  B.winner = calculateWinner(B, winningLines);

  addBoard(B); // adding the board to the history
  bannerEnd("handleClick");
  return B;
  // meed to add in a check for winners
}
