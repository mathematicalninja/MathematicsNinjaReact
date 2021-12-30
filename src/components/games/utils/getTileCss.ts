import styles from "../css/tile.module.scss";
import { tileAndBoard } from "../interfaces/squareGame";
import { isLastClick } from "./isLastClick";
import { isWinTile } from "./isWinTile";

export function getTileCss({ board, tile: { x, y } }: tileAndBoard) {
  const isWin = isWinTile({ board, tile: { x, y } }) ? "-win" : "";
  const isLast = isLastClick({ board, tile: { x, y } }) ? "-last" : "";
  const tileClass = ".tile" + isWin + isLast;

  if (isLast) {
    return styles.last;
  }
  if (isWin) {
    return styles.win;
  }

  return styles.tile;
}
