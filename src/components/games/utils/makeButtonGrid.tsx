import React, { CSSProperties } from "react";
import CenterThis from "../../../utils/react/centerThis";
import { BoardState, tileCoords } from "../interfaces/squareGame";
import { xyToStyleProps } from "./xyToStyle";

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
      // x,y are correct here
      //
      const P: CSSProperties = {
        gridColumn: x + 1,
        gridRow: y + 1,
      };
      const S = makeStyle ? makeStyle({ tile: { x, y }, board }) : P;
      const CB = makeCallback ? makeCallback({ x, y }) : undefined;
      const CT = makeContent ? makeContent({ x, y }) : null;
      G.push(
        <button style={S} onClick={CB}>
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
