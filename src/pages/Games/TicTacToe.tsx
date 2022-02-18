// import TicTac from "../../components/games/__oudated/TicTac";
import BlogClass from "../../components/blogClass/BlogClass";
import FullPageBody from "../../core/wrappers/FullPageBody";
import React from "react";
import FcSquareGame from "../../components/games/global/fcSquareGame";
import FcTicTacToe from "../../components/games/global/fcTicTacToe";
import { staticCheckTile } from "../../components/games/utils/handleSquareClick";

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
  return (
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
        minHorizontal: 5,
        maxHorizontal: 5,

        verticalType: "fullOnly",
        minVertical: 5,
        maxVertical: 5,
      }}
    />
  );
};
//   // function FTTP(props: { gridSize?: number[] }) {
//   const TicTacToe = (
//     <FcTicTacToe
//       gridSize={{ x: 5, y: 5 }}
//       CheckTile={staticCheckTile}
//       minDiagonalLength={5}
//       maxDiagonalLength={5}
//     />
//   );
//   return (
//     <>
//       <FullPageBody
//         content={TicTacToe}
//         // content={new TicTac({ gridSize: [4, 4] })}
//         // content={new TicTac({ gridSize: [4, 4] })}
//         // blogPostName="samplePageExplinations/TicTacBlogExplain.json"
//         blogPostName="samplePageExplinations/TicTacBlogExplain_temp.json"
//       />
//     </>
//   );
// };

// const TTT: React.FC<TTTProps> = ({
//   gridSize,
//   minimumDiagonal,
//   maximumDiagonal,
// }) => {
//   return (
//     <>
//       {gridSize} {minimumDiagonal} {maximumDiagonal}
//       <br />
//     </>
//   );
// };
// // class TTP extends FullPageBody {
// //   constructor() {
// //     super({
// //       content: new TicTac({
// //         gridSize: [5, 5],
// //       }),
// //       //   (
// //       //     <div>
// //       //       Hello there, yes I am a game of Tic Tac Toe
// //       //       {/* <TicTac gridSize={[5, 5]} /> */}
// //       //     </div>
// //       //   )
// //       blogPost: new BlogClass({
// //         blogName: "samplePageExplinations/TicTacBlogExplain.json",
// //       }),

// //       //   (
// //       //     <BlogClass blogName={"samplePageExplinations/TicTacBlogExplain.json"} />
// //       //   ),
// //     });
// //   }
// // }

// // import React from 'react'

// // interface TicTacToeProps {}

// // const TicTacToe: React.FC<TicTacToeProps> = ({}) => {
// //   return <>Hello</>;
// // };
// // export default TicTacToe;

export default FTTP;
