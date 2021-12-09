import React, { useState } from "react";
import { arrayStatePush } from "../../utils/react/arrayStatePush";
import allPlayerLogos from "./gameParts/playerLogos";
import {
  gridLayout,
  tileCoords,
  squareWinner,
  BoardState,
} from "./interfaces/squareGame";
import {
  CheckTileProps,
  handleClick,
  staticCheckTile,
} from "./utils/handleSquareClick";
import { makeWinLines, winLineGrid } from "./utils/squareWinLines";

interface fcSquareGameProps {
  gridSize: tileCoords;
  minimumDiagonal?: number;
  maximumDiagonal?: number;
  CheckTile?: (props: CheckTileProps) => tileCoords | null;
}

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

interface BoardTiles {}
interface gameSetupI {}

const FcSquareGame: React.FC<fcSquareGameProps> = (props) => {
  const [playerLogos, setPlayerLogos] = useState(allPlayerLogos.emoji);
  const [gameSetup, setGameSetup] = useState<gameSetupI>({
    maxPlayers: 2,
    gridSize: props.gridSize,
  });
  const [currentPlayer, setCurrentPlayer] = useState(0); // need to change player to be calculated from move number
  const [currentMove, setCurrentMove] = useState(0);
  const [winningLines, setWinningLines] = useState(
    makeWinLines({
      gridSize: props.gridSize,
      maxDiagonalLength: props.maximumDiagonal,
      minDiagonalLength: props.minimumDiagonal,
    }),
  );
  const [blankBoard, setBlankBoard] = useState<BoardState>({
    squares: Array(props.gridSize[0]).fill(Array(props.gridSize[1]).fill(null)),
    currentTile: undefined,
    moveList: [],
    winner: null,
  });
  const [boardHistory, setBoardHistory] = useState<BoardState[]>([blankBoard]);
  const [currentBoard, setCurrentBoard] = useState<BoardState>(blankBoard);
  const addBoard = arrayStatePush(setBoardHistory);
  // TODO: Note this will mess up with Rewind, as the boards are only pushed and if the game is continued from a previous state, then new boards will appear in the wrong places, and old boards will still exist.

  // const [CheckTile, changeTileFall] = useState(
  //   props.CheckTile ? props.CheckTile : staticCheckTile,
  // ); //this creates an error as React messes with function types in useState
  const CheckTile = props.CheckTile ? props.CheckTile : staticCheckTile;

  const click = (tile: tileCoords) =>
    handleClick({
      Board: currentBoard,
      player: currentPlayer,
      winningLines: winningLines,
      x: tile.x,
      y: tile.y,
      CheckTile: CheckTile,
    });

  return <></>;
};
export default FcSquareGame;
