import TicTac from "../components/games/TicTac";
import BlogClass from "../components/blogClass/BlogClass";
import FullPageBody from "../PageTypes/FullPageBody";
import React from "react";

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

interface FTTPProps {
  gridSize?: number[];
}

const FTTP: React.FC<FTTPProps> = (props) => {
  return <>Hello</>;

  const gridSize = props.gridSize ? props.gridSize : [3, 3];
  return (
    <FullPageBody
      content={new TicTac({ gridSize })}
      blogPost={
        new BlogClass({
          blogName: "samplePageExplinations/TicTacBlogExplain.json",
        })
      }
    />
  );
};

class TTP extends FullPageBody {
  constructor() {
    super({
      content: new TicTac({
        gridSize: [5, 5],
      }),
      //   (
      //     <div>
      //       Hello there, yes I am a game of Tic Tac Toe
      //       {/* <TicTac gridSize={[5, 5]} /> */}
      //     </div>
      //   )
      blogPost: new BlogClass({
        blogName: "samplePageExplinations/TicTacBlogExplain.json",
      }),

      //   (
      //     <BlogClass blogName={"samplePageExplinations/TicTacBlogExplain.json"} />
      //   ),
    });
  }
}

// import React from 'react'

interface TicTacToeProps {}

const TicTacToe: React.FC<TicTacToeProps> = ({}) => {
  const gridSize = [3, 3];
  return (
    <>
      <div>hello</div>
      <FullPageBody
      // content={new TicTac({ gridSize })}
      // content={<div>Test div here</div>}
      // blogPost={
      //   new BlogClass({
      //     blogName: "samplePageExplinations/TicTacBlogExplain.json",
      //   })
      // }
      />
    </>
  );
  return <>Hello</>;
};
export default TicTacToe;

// export default FTTP({});
