import React from "react";

// TODO: give this a toggle, so the user can switch between win lines and replay
interface displayWinLinesProps {}

const DisplayWinLines: React.FC<displayWinLinesProps> = ({}) => {
  return <></>;
};
export default DisplayWinLines;

// import React, { useEffect } from "react";

// export default function Card(props) {
//   useEffect(() => {
//     const timeoutID = setTimeout(() => {
//       props.onSelect(null);
//     }, 5000);
//     return () => {
//       clearTimeout(timeoutID);
//     };
//   }, [props.onSelect]);

//   return [1, 2, 3, 4].map(choice => (
//     <button
//       key={choice}
//       data-testid={choice}
//       onClick={() => props.onSelect(choice)}
//     >
//       {choice}
//     </button>
//   ));
// }
