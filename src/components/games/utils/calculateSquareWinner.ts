import { bannerEnd } from "../../../utils/devTools/bannerEnd";
import { bannerStart } from "../../../utils/devTools/bannerStart";
import { devLog } from "../../../utils/devTools/devLog";
import { logGridValues } from "../../../utils/devTools/logGridValues";
import { BoardState, squareWinner, tileCoords } from "../interfaces/squareGame";
import { getTile } from "./getSquareValue";
import { winLineGrid } from "./squareWinLines";

/**
 * Takes the current board state and returns a winner, if there is one, or null if there isn't
 */
function calculateWinner(
  board: BoardState,
  winningLines: winLineGrid,
): squareWinner | null {
  bannerStart("calculateWinner");
  logGridValues(board.squares);
  let R: squareWinner;
  for (let indexOfLine = 0; indexOfLine < winningLines.length; indexOfLine++) {
    let thisLine = winningLines[indexOfLine];
    //
    //
    //
    // devLog(thisLine);
    let tally: number = 0;
    const T = thisLine[0];
    const S = getTile({ board: board, x: T.x, y: T.y });
    if (S === null) {
      continue;
    }
    for (let index = 0; index < thisLine.length; index++) {
      const element = thisLine[index];
      const [x, y] = [element.x, element.y];
      const V = getTile({ board, x, y });
      // devLog(V);
      if (V == S) {
        tally++;
      }
      if (tally == thisLine.length) {
        devLog("#################################################");
        const NR: squareWinner = { player: S, line: thisLine };
        return NR;
      }
    }
    devLog("no winner", S, board.moveList.length);
    //
    // /
    //
    //

    //   let x_0 = thisLine[0].x;
    //   let y_0 = thisLine[0].y;
    //   let a = getTile({ board: board, x: x_0, y: y_0 });
    //   if (a !== null && a !== undefined) {
    //     let count = 0;
    //     for (let k = 0; k < thisLine.length; k++) {
    //       let x = thisLine[k].x;
    //       let y = thisLine[k].y;
    //       let value = board.squares[x][y] ? board.squares[x][y] : null;
    //       if (value === a) {
    //         count++;
    //       }
    //     }
    //     if (count === thisLine.length) {
    //       R = { player: a, line: thisLine };

    //       bannerEnd("calculateWinner");
    //       return R;
    //     }
    //   }
    // }
  }
  bannerEnd("calculateWinner");
  return null;
}

export default calculateWinner;
