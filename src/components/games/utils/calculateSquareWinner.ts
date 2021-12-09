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
  let R: squareWinner;
  for (let indexOfLine = 0; indexOfLine < winningLines.length; indexOfLine++) {
    let thisLine = winningLines[indexOfLine];
    let x_0 = thisLine[0].x;
    let y_0 = thisLine[0].y;
    let a = getTile({ grid: board.squares, x: x_0, y: y_0 });
    if (a !== null) {
      let count = 0;
      for (let k = 0; k < thisLine.length; k++) {
        let x = thisLine[k][0];
        let y = thisLine[k][1];
        let value = board[x][y] ? board[x][y].content : null;
        if (value === a) count++;
      }
      if (count === thisLine.length) {
        return { player: a, line: thisLine };
      }
    }
  }

  return null;
}

export default calculateWinner;
