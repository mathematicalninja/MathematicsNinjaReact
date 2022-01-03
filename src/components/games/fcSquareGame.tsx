import React, { useState } from "react";
import {
  arrayStatePush,
  historyArrayStatePush,
} from "../../utils/react/arrayStatePush";
import allPlayerLogos from "./gameParts/playerLogos";
import { BoardState, tileCoords } from "./interfaces/squareGame";
import { makeButtonGrid } from "./utils/makeButtonGrid";
import { getPlayer } from "./utils/getPlayer";
import { getTile } from "./utils/getSquareValue";
import { CheckTileProps, staticCheckTile } from "./utils/handleSquareClick";
import { handleClick } from "./utils/handleClick";
import { makeWinLines } from "./utils/squareWinLines";
import { xyFunction, xyToClick } from "./utils/xyToClick";
import { xyToStyle } from "./utils/xyToStyle";
import { bannerStart } from "../../utils/devTools/bannerStart";
import { bannerEnd } from "../../utils/devTools/bannerEnd";
import { calculatePlayer } from "./utils/calculatePlayer";
import CenterThis from "../../utils/react/centerThis";

import styles from "../css/tile.module.scss";
import { devLog } from "../../utils/devTools/devLog";

interface fcSquareGameProps {
  gridSize: tileCoords;
  minimumDiagonal?: number;
  maximumDiagonal?: number;
  CheckTile?: (props: CheckTileProps) => tileCoords | null;
}

interface BoardTiles {}
interface gameSetupI {
  maxPlayers: number;
  gridSize: tileCoords;
}
interface newBoardProps {
  Board: BoardState;
  setBoardHistory: React.Dispatch<React.SetStateAction<BoardState[]>>;
  setCurrentBoard: React.Dispatch<React.SetStateAction<BoardState>>;
}
function newBoard({
  Board,
  setBoardHistory,
  setCurrentBoard,
}: newBoardProps): void {
  arrayStatePush(setBoardHistory)(Board);
  setCurrentBoard(Board);
}

const FcSquareGame: React.FC<fcSquareGameProps> = (props) => {
  bannerStart("FcSquareGame");
  const [gameSetup, setGameSetup] = useState<gameSetupI>({
    maxPlayers: 2,
    gridSize: props.gridSize,
  });
  const [playerLogos, setPlayerLogos] = useState(
    allPlayerLogos.emoji.slice(0, gameSetup.maxPlayers),
  );
  // const [currentMove, setCurrentMove] = useState(0);
  const [winningLines, setWinningLines] = useState(
    makeWinLines({
      gridSize: props.gridSize,
      maxDiagonalLength: props.maximumDiagonal,
      minDiagonalLength: props.minimumDiagonal,
    }),
  );
  devLog(props.gridSize);
  const [blankBoard, setBlankBoard] = useState<BoardState>({
    squares: Array(props.gridSize.x).fill(Array(props.gridSize.y).fill(null)),
    currentTile: undefined,
    moveList: [],
    winner: null,
  });
  const [boardHistory, setBoardHistory] = useState<BoardState[]>([blankBoard]);
  const [currentBoard, setCurrentBoard] = useState<BoardState>(blankBoard);
  // const addBoard = arrayStatePush(setBoardHistory);
  const addBoard = historyArrayStatePush<BoardState>({
    arraySetState: setBoardHistory,
    elementSetState: setCurrentBoard,
  });

  // TODO: Note this will mess up with Rewind, as the boards are only pushed and if the game is continued from a previous state, then new boards will appear in the wrong places, and old boards will still exist.

  // const [CheckTile, changeTileFall] = useState(
  //   props.CheckTile ? props.CheckTile : staticCheckTile,
  // ); //this creates an error as React messes with function types in useState
  const CheckTile = props.CheckTile ? props.CheckTile : staticCheckTile;

  const click = currentBoard.winner
    ? (tile: tileCoords) => {
        return null;
      }
    : (tile: tileCoords) => {
        handleClick({
          Board: currentBoard,
          player: currentPlayer,
          winningLines: winningLines,
          x: tile.x,
          y: tile.y,
          CheckTile: CheckTile,
          addBoard: addBoard,
        });
      };
  // const [currentPlayer, setCurrentPlayer] = useState(0); // need to change player to be calculated from move number

  const currentPlayer = calculatePlayer(
    currentBoard.moveList,
    playerLogos,
  ).curr;

  bannerEnd("FcSquareGame");

  const renderGrid = makeButtonGrid({
    xMax: gameSetup.gridSize.x,
    yMax: gameSetup.gridSize.y,
    makeCallback: xyFunction(click),
    makeStyle: xyToStyle,
    makeContent: ({ x, y }: tileCoords) => {
      return getPlayer({
        player: getTile({ board: currentBoard, x, y }),
        players: playerLogos,
      });
    },
    board: currentBoard,
  });

  return renderGrid;

  // return renderGrid;
};
export default FcSquareGame;
