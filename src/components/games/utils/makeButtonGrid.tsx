import React, { CSSProperties } from "react";
import CenterThis from "../../../utils/react/centerThis";
import { BoardState, tileCoords } from "../interfaces/squareGame";
import { isLastClick } from "./isLastClick";
import { isWinTile } from "./isWinTile";
import { xyToStyleProps } from "./xyToStyle";
import styles from "../css/tile.module.scss";
import { getTileCss } from "./getTileCss";

export interface buttonGridProps {
  xMax: number;
  yMax: number;
  makeStyle?: (props: xyToStyleProps) => CSSProperties;
  makeCallback?: (tile: tileCoords) => () => void;
  makeContent?: (tile: tileCoords) => string | JSX.Element | null;
  board: BoardState;
}

export function makeButtonGrid({
  xMax,
  yMax,
  makeStyle,
  makeCallback,
  makeContent,
  board,
}: buttonGridProps) {
  let G: JSX.Element[] = [];
  for (let x = 0; x < xMax; x++) {
    for (let y = 0; y < yMax; y++) {
      const tile = { x, y };
      // x,y are correct here
      //
      const P: CSSProperties = {
        gridColumn: x + 1,
        gridRow: y + 1,
      };
      // const S = makeStyle ? makeStyle({ tile: { x, y }, board }) : P;
      const S = P;
      const CB = makeCallback ? makeCallback(tile) : undefined;
      const CT = makeContent ? makeContent(tile) : null;
      const isWin = isWinTile({ board, tile }) ? "-win" : "";
      const isLast = isLastClick({ board, tile }) ? "-last" : "";
      // const tileClass = ".tile" + isWin + isLast;
      const tileClass = getTileCss({ board, tile });

      G.push(
        <button style={S} onClick={CB} className={tileClass}>
          {CT}
        </button>,
      );
    }
  }
  return (
    <CenterThis>
      <div style={{ display: "grid", margin: "0 auto" }}>{G}</div>;
    </CenterThis>
  );
}
