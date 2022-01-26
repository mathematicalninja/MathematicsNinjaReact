import React from "react";
import FcSquareGame from "../components/games/fcSquareGame";
import SquareGridBasedGame from "../components/games/squareGridBasedGame";
import { staticCheckTile } from "../components/games/utils/handleSquareClick";

interface TestGridGameProps {}

const TestGridGame: React.FC<TestGridGameProps> = ({}) => {
  return (
    <FcSquareGame
      //
      gridSize={{ x: 5, y: 4 }}
      CheckTile={staticCheckTile}
      //
      boardStructure={{
        diagonalType: "fullOnly",
        HorizontalType: "fullOnly",
        verticalType: "fullOnly",

        minHorizontal: 3,
        maxHorizontal: 5,

        minVertical: 4,
        maxVertical: 4,

        minDiagonal: 2,
        maxDiagonal: 5,
      }}
    />
  );
};
export default TestGridGame;
