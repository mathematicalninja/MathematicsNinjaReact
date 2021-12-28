import { BoardState, tileCoords } from "./squareGame";
import { winLineGrid } from "../utils/squareWinLines";

// export interface SquareGameProps {
//   gridSize: tileCoords;
//   minimumDiagonal?: number;
//   maximumDiagonal?: number;
//   CheckTile?: (props: CheckTileProps) => tileCoords | null;
// }

export interface SquareGameState {
  playerLogos: (JSX.Element | string)[];
  currentPlayer: number;
  maxPlayers: number;
  moveNumber: number;
  gridSize: tileCoords;
  history: BoardState[];
  winningLines: winLineGrid;
}
