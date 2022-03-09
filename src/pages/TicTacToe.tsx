import TicTac from "../components/games/TicTac";
import BlogClass from "../components/blogClass/BlogClass";
import FullPageBody from "../PageTypes/FullPageBody";
import React from "react";
import FcSquareGame from "../components/games/fcSquareGame";
import FcTicTacToe from "../components/games/fcTicTacToe";
import { staticCheckTile } from "../components/games/utils/handleSquareClick";

// interface TicTacPageInterface{
//     A:FullPageBody
//     content:TicTac
//     blogPost:BlogClass
// }

// let TicTacPage:TicTacPageInterface = {
//     A: new FullPageBody({
//         content: <TicTac gridSize={[5, 5]} />,
//         blogPost: <BlogClass blogName={"samplePageExplinations/TicTacBlogExplain.json"} />
//     }),

//     content: <TicTac gridSize={[5, 5]} />,

//     blogPost: <BlogClass blogName={"samplePageExplinations/TicTacBlogExplain.json"} />
// }

// class TicTacPageOld extends FullPageBody {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return <div>
//             <TicTac gridSize={[5, 5]} />
//             {/* massive error with file structure. Can't get this to work */}
//             <BlogClass blogName={"samplePageExplinations/TicTacBlogExplain.json"} />
//         </div>
//     }

// }

interface TTTProps {
  gridSize: [number, number];
  minimumDiagonal?: number;
  maximumDiagonal?: number;
}

const FTTP: React.FC = () => {
  const TicTacToe = (
    <FcSquareGame
      //TODO: switch all gridSize's to being type gridSize, which is 1-indexed
      gridSize={{ x: 5, y: 5 }}
      CheckTile={staticCheckTile}
      //
      boardStructure={{
        diagonalType: "fullOnly",
        minDiagonal: 3,
        maxDiagonal: 5,

        HorizontalType: "fullOnly",
        minHorizontal: 3,
        maxHorizontal: 5,

        verticalType: "fullOnly",
        minVertical: 3,
        maxVertical: 4,
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
