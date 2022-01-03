import TicTac from "../components/games/TicTac";
import BlogClass from "../components/blogClass/BlogClass";
import FullPageBody from "../PageTypes/FullPageBody";
import React from "react";
import FcSquareGame from "../components/games/fcSquareGame";
import FcTicTacToe from "../components/games/fcTicTacToe";
import { fallingCheckTile } from "../components/games/utils/handleSquareClick";

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
  // function FTTP(props: { gridSize?: number[] }) {
  const TicTacToe = (
    <FcTicTacToe
      gridSize={{ x: 7, y: 6 }}
      CheckTile={fallingCheckTile}
      maximumDiagonal={4}
      minimumDiagonal={4}
    />
  );

  return (
    <>
      <FullPageBody
        content={TicTacToe}
        // content={new TicTac({ gridSize: [4, 4] })}
        // content={new TicTac({ gridSize: [4, 4] })}
        blogPostName="samplePageExplinations/TicTacBlogExplain.json"
      />
    </>
  );
};

const TTT: React.FC<TTTProps> = ({
  gridSize,
  minimumDiagonal,
  maximumDiagonal,
}) => {
  return (
    <>
      {gridSize} {minimumDiagonal} {maximumDiagonal}
      <br />
    </>
  );
};
// class TTP extends FullPageBody {
//   constructor() {
//     super({
//       content: new TicTac({
//         gridSize: [5, 5],
//       }),
//       //   (
//       //     <div>
//       //       Hello there, yes I am a game of Tic Tac Toe
//       //       {/* <TicTac gridSize={[5, 5]} /> */}
//       //     </div>
//       //   )
//       blogPost: new BlogClass({
//         blogName: "samplePageExplinations/TicTacBlogExplain.json",
//       }),

//       //   (
//       //     <BlogClass blogName={"samplePageExplinations/TicTacBlogExplain.json"} />
//       //   ),
//     });
//   }
// }

// import React from 'react'

// interface TicTacToeProps {}

// const TicTacToe: React.FC<TicTacToeProps> = ({}) => {
//   return <>Hello</>;
// };
// export default TicTacToe;

export default FTTP;
