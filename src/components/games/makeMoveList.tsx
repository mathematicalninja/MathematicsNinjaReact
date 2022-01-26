import React from "react";
import { JsxElement } from "typescript";
import { devLog } from "../../utils/devTools/devLog";
import { BoardState } from "./interfaces/squareGame";

interface makeMoveListProps {
  changeToMove: (i: number) => void;
}

export function MakeMoveList({
  boardHistory,
  // setCurrentBoard,
  changeToMove,
}): React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>[] {
  // let list: any[] = [];
  // let i = 0;
  const list = boardHistory.map((board, move) => {
    const desc = move ? "Go to move " + move : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => {
            console.log(boardHistory);
            changeToMove(move);
          }}
        >
          {desc}
        </button>
      </li>
    );
  });
  // boardHistory.forEach((board) => {
  //   list.push(
  //     <button
  //       onClick={() => {
  //         const f = echo(i);
  //         console.log("Board history check: ", boardHistory, echo(f));
  //         setCurrentBoard(board);
  //       }}
  //     >
  //       move {i}
  //     </button>,
  //   );
  //   i++;
  // });
  return list;
}
// export default MakeMoveList;

function echo(n: number): number {
  return n;
}

// // import "./HistoryControls.scss"

// export function HistoryControls(props) {
//   // need to add in styling to these controls

//   const historyButtons = props.history.map((irreleventIndex, moveIndex) => {
//       const description = moveIndex ?
//           "Move number " + moveIndex + "." :
//           "Back to the start.";
//       return (
//           <div key={ moveIndex } >
//               <button
//                   onClick={ () => props.timeTravel(moveIndex) }
//                   className="timeTravelButton"
//               >
//                   { description }
//               </button>
//           </div>
//       )

//   })
//   return historyButtons
// }
