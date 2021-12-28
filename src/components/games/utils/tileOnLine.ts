import { tileCoords } from "../interfaces/squareGame";

export function tileOnLine(tile: tileCoords, line: tileCoords[]): boolean {
  for (const T of line) {
    if (T.x == tile.x && T.y == tile.y) {
      return true;
    }
  }
  return false;
}
