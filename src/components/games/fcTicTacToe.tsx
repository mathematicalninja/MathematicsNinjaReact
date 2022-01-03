import React from "react";
import FcSquareGame from "./fcSquareGame";
import { tileCoords } from "./interfaces/squareGame";
import {
  staticCheckTile,
  fallingCheckTile,
  CheckTileProps,
} from "./utils/handleSquareClick";

interface fcTicTacToeProps {
  gridSize: { x: number; y: number };
  minimumDiagonal?: number;
  maximumDiagonal?: number;
  CheckTile?: (CheckTileProps) => tileCoords | null;
}

const FcTicTacToe: React.FC<fcTicTacToeProps> = (props) => {
  return (
    <FcSquareGame
      CheckTile={props.CheckTile ? props.CheckTile : staticCheckTile}
      {...props}
    />
  );
};
export default FcTicTacToe;
