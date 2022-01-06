import React from "react";
import FcSquareGame, { fcSquareGameProps } from "./fcSquareGame";
import { tileCoords } from "./interfaces/squareGame";
import {
  staticCheckTile,
  fallingCheckTile,
  CheckTileProps,
} from "./utils/handleSquareClick";

interface fcTicTacToeProps extends fcSquareGameProps {
  // gridSize: { x: number; y: number };
  // minimumDiagonal?: number;
  // maximumDiagonal?: number;
  // CheckTile?: (CheckTileProps) => tileCoords | null;
}

const FcTicTacToe: React.FC<fcTicTacToeProps> = (props) => {
  //TODO: This should have options to show the header, resize, time travel, etc.

  return (
    <FcSquareGame
      CheckTile={props.CheckTile ? props.CheckTile : staticCheckTile}
      {...props}
    />
  );
};
export default FcTicTacToe;
