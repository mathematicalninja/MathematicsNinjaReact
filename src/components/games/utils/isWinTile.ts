import { tileAndBoard } from "../interfaces/squareGame";
import { tileOnLine } from "./tileOnLine";

export function isWinTile({ board, tile }: tileAndBoard): Boolean {
  const winLine = board.winner?.line;

  if (winLine) {
    const B = tileOnLine(tile, winLine);
    if (B) {
      return true;
    }
  }

  return false;
}
