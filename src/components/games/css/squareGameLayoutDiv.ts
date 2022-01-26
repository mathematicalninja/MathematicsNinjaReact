import { CSSProperties } from "react";

export const squareGameLayoutDiv: CSSProperties = {
  display: "grid",
  gridTemplateAreas: `
  . title .
  . grid moves
`,
  gridTemplateColumns: "1fr auto 1fr",
  gridTemplateRows: "auto auto",
};

export const squareGameLayoutDiv_title: CSSProperties = {
  gridTemplate: "title",
};
export const squareGameLayoutDiv_renderGrid: CSSProperties = {
  gridTemplate: "grid",
};
export const squareGameLayoutDiv_moveList: CSSProperties = {
  gridTemplate: "moves",
};
