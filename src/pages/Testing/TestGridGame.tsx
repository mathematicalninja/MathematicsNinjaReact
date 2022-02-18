import React from "react";
import FcSquareGame from "../../components/games/global/fcSquareGame";
import SquareGridBasedGame from "../../components/games/global/squareGridBasedGame";
import { staticCheckTile } from "../../components/games/utils/handleSquareClick";

interface TestGridGameProps {}

const TestGridGame: React.FC<TestGridGameProps> = ({}) => {
  return (
    <FcSquareGame
      //TODO: switch all gridSize's to being type gridSize, which is 1-indexed
      gridSize={{ x: 5, y: 4 }}
      CheckTile={staticCheckTile}
      //
      boardStructure={{
        diagonalType: "subLines",
        minDiagonal: 2,
        maxDiagonal: 5,

        HorizontalType: "subLines",
        minHorizontal: 3,
        maxHorizontal: 5,

        verticalType: "subLines",
        minVertical: 3,
        maxVertical: 4,
      }}
    />
  );
};
export default TestGridGame;
