import TicTac from "../components/games/TicTac";
import BlogClass from "../components/blogClass/BlogClass";
import FullPageBody from "../PageTypes/FullPageBody";
import React from "react";
import FcSquareGame, {
  fcSquareGameProps,
} from "../components/games/fcSquareGame";
import FcTicTacToe from "../components/games/fcTicTacToe";
import { fallingCheckTile } from "../components/games/utils/handleSquareClick";

interface TTTProps extends fcSquareGameProps {
  // gridSize: [number, number];
  // minimumDiagonal?: number;
  // maximumDiagonal?: number;
}

const FTTP: React.FC = () => {
  // function FTTP(props: { gridSize?: number[] }) {
  const TicTacToe = (
    <FcTicTacToe
      gridSize={{ x: 7, y: 6 }}
      CheckTile={fallingCheckTile}
      maxDiagonalLength={4}
      minDiagonalLength={4} //FIXME: doesn't seem to pass through to the winLine calculations
      maxHorizontalLength={4}
      minHorizontalLength={4}
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
