import React from "react";
import FcSquareGame, {
  fcSquareGameProps,
} from "../components/games/fcSquareGame";
import { yIndependentFallingCheckTile } from "../components/games/utils/handleSquareClick";
import FullPageBody from "../PageTypes/FullPageBody";

interface TTTProps extends fcSquareGameProps {
  // gridSize: [number, number];
  // minimumDiagonal?: number;
  // maximumDiagonal?: number;
}

const FTTP: React.FC = () => {
  // function FTTP(props: { gridSize?: number[] }) {
  const TicTacToe = (
    <FcSquareGame
      //TODO: switch all gridSize's to being type gridSize, which is 1-indexed
      gridSize={{ x: 7, y: 6 }}
      CheckTile={yIndependentFallingCheckTile}
      //
      boardStructure={{
        diagonalType: "subLines",
        minDiagonal: 4,
        maxDiagonal: 6,

        HorizontalType: "subLines",
        minHorizontal: 4,
        maxHorizontal: 7,

        verticalType: "subLines",
        minVertical: 4,
        maxVertical: 6,
      }}
    />
  );

  return (
    <>
      <FullPageBody
        content={TicTacToe}
        blogPostName="samplePageExplinations/TicTacBlogExplain.json"
      />
    </>
  );
};

export default FTTP;
