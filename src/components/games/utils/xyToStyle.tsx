import { CSSProperties } from "react";
import { BoardState, tileCoords } from "../interfaces/squareGame";
import { tileOnLine } from "./tileOnLine";

//
export interface xyToStyleProps {
  tile: tileCoords;
  board: BoardState;
}
export function xyToStyle({ tile, board }: xyToStyleProps) {
  const [x, y] = [tile.x, tile.y];
  const curr = board.currentTile;

  let bg: string = "var(--Secondary-9)";
  if (curr) {
    if (curr.x == x && curr.y == y) {
      bg = "var(--Secondary-1)";
    }
  }

  const winLine = board.winner?.line;

  if (winLine) {
    const B = tileOnLine(tile, winLine);
    if (B) {
      bg = "var(--Accent-0)";
    }
  }
  const S: CSSProperties = {
    background: bg,
    border: "1px solid var(--Secondary-0)",
    margin: "1px",
    float: "left",
    fontSize: "60px",
    fontWeight: "bold",
    lineHeight: "34px",
    height: "120px",
    marginRight: "-1px",
    marginTop: "-1px",
    padding: "0",
    textAlign: "center",
    width: "120px",
    gridColumn: x + 1,
    gridRow: y + 1,
  };
  return S;
}
