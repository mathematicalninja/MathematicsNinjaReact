import React from "react";
import FcSquareGame from "./fcSquareGame";
import { staticCheckTile } from "./utils/handleSquareClick";

interface fcTicTacToeProps {
  gridSize: { x: number; y: number };
  minimumDiagonal?: number;
  maximumDiagonal?: number;
}

const FcTicTacToe: React.FC<fcTicTacToeProps> = (props) => {
  return <FcSquareGame CheckTile={staticCheckTile} {...props} />;
};
export default FcTicTacToe;
