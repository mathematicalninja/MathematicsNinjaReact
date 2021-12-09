import React from "react";
import FcSquareGame from "./fcSquareGame";

interface fcTicTacToeProps {
  gridSize: { x: number; y: number };
  minimumDiagonal?: number;
  maximumDiagonal?: number;
}

const FcTicTacToe: React.FC<fcTicTacToeProps> = (props) => {
  return <FcSquareGame {...props} />;
};
export default FcTicTacToe;
