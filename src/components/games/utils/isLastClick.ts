import { tileAndBoard } from "../interfaces/squareGame";

export function isLastClick({ board, tile }: tileAndBoard) {
  const curr = board.currentTile;

  if (curr) {
    if (curr.x == tile.x && curr.y == tile.y) {
      return true;
    }
  }

  return false;
}
