import { CSSProperties } from "react";
import { BoardState, tileCoords } from "../interfaces/squareGame";
import { isLastClick } from "./isLastClick";
import { isWinTile } from "./isWinTile";
import { tileOnLine } from "./tileOnLine";
import { defaultTileStyle } from "../css/defaultTileStyle";

//
export interface xyToStyleProps {
  tile: tileCoords;
  board: BoardState;
}
export function xyToStyle({ tile, board }: xyToStyleProps) {
  const [x, y] = [tile.x, tile.y];
  const curr = board.currentTile;

  const isWin: Boolean = isWinTile({ tile, board });
  const isClick: Boolean = isLastClick({ tile, board });
  const isDefault = !(isWin || isClick);

  let unionStyle: CSSProperties = {};

  const lastClick: CSSProperties = {
    backgroundColor: "var(--Secondary-1)",
    borderRadius: "100%",
  };

  const winTile: CSSProperties = {
    background: "var(--Accent-0)",
    borderRadius: "100%",
  };

  const D = defaultTileStyle;
  const defaultStyle: CSSProperties = {
    background: "var(--Accent-0)",
    gridColumn: x + 1,
    gridRow: y + 1,
    ...D,
  };

  unionStyle = { ...defaultStyle };
  if (isWin) {
    unionStyle = { ...unionStyle, ...winTile };
  }
  if (isClick) {
    unionStyle = { ...unionStyle, ...lastClick };
  }

  if (isDefault) {
    unionStyle = {
      gridColumn: x + 1,
      gridRow: y + 1,
      ...D,
    };
  }

  return unionStyle;

  // style = S -{union}- tile design.
  // need to overwrite S's things with tile's preferences
  // style = {...S,...Tile}
}
