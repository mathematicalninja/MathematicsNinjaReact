import React, { useState } from "react";
import { devLog } from "../../../utils/devTools/devLog";
import pause from "../../../utils/other/pause";
import {
  arrayStatePush,
  historyArrayStatePush,
} from "../../../utils/react/arrayStatePush";
import PrintKeyValues from "../../../utils/react/printKeyValues";
import { squareGameLayoutDiv } from "../css/squareGameLayoutDiv";
import allPlayerLogos from "../components/playerLogos";
import { boardStructure } from "../interfaces/lineStructure";
import { BoardState, gridLayout, tileCoords } from "../interfaces/squareGame";
import { MakeMoveList } from "../components/makeMoveList";
import MakeTitle from "../components/makeTitle";
import { calculatePlayer } from "../utils/calculatePlayer";
import { getPlayer } from "../utils/getPlayer";
import { getTile } from "../utils/getSquareValue";
import { handleClick } from "../utils/handleClick";
import { CheckTileProps, staticCheckTile } from "../utils/handleSquareClick";
import { makeButtonGrid } from "../utils/makeButtonGrid";
import { winLinesInput } from "../utils/squareWinLines";
import anyLine from "../utils/winlines/anyLine";
import { xyFunction } from "../utils/xyToClick";
import { xyToStyle } from "../utils/xyToStyle";

export interface fcSquareGameProps extends winLinesInput {
  // gridSize: tileCoords;
  // minDiagonalLength?: number;
  // maxDiagonalLength?: number;
  CheckTile?: (props: CheckTileProps) => tileCoords | null;
  boardStructure: boardStructure;
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
  const [gameSetup, setGameSetup] = useState<gameSetupI>({
    maxPlayers: 2,
    gridSize: props.gridSize,
  });
  const [playerLogos, setPlayerLogos] = useState(
    allPlayerLogos.emoji.slice(0, gameSetup.maxPlayers),
  );
  // const [currentMove, setCurrentMove] = useState(0);
  const [winningLines, setWinningLines] = useState(
    // makeWinLines({
    //   gridSize: props.gridSize,
    //   maxDiagonalLength: props.maxDiagonalLength,
    //   minDiagonalLength: props.minDiagonalLength,
    // }),

    anyLine({
      boardStructure: props.boardStructure,
      gridSize: gameSetup.gridSize,
    }),
  );
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

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // TODO: board History i sbeing SET using currentBoard, a stateful value.
  // So it's the most current value in each step of the history
  const changeToMove = (i) => {
    devLog("move: ", i);
    // devLog("move number: " + i);
    setCurrentBoard(boardHistory[i]);
  };
  const moveList = MakeMoveList({ changeToMove, boardHistory });

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  const populateBoard = (
    line: tileCoords[],
    gridSize: tileCoords,
  ): BoardState => {
    const winner = { line: line, player: 0 };
    let squares: gridLayout = [];
    for (let x = 0; x < gridSize.x; x++) {
      let row: (number | null)[] = [];
      for (let y = 0; y < gridSize.y; y++) {
        row.push(null);
      }
      squares.push(row);
    }
    for (const tile of line) {
      squares[tile.x][tile.y] = 0;
    }

    let R: BoardState = { winner, moveList: [], currentTile: line[0], squares };
    return R;
  };

  const changeToWinner = (i) => {
    devLog("winning line: ", i);

    setCurrentBoard(populateBoard(winningLines[i], gameSetup.gridSize));
  };
  const winnerList = MakeMoveList({
    changeToMove: changeToWinner,
    boardHistory: winningLines,
  });
  //
  //
  //
  //
  //
  //
  //
  //
  //

  const title = MakeTitle({ currentPlayer, playerLogos });
  // devLog(winningLines);

  //

  //
  //
  //
  //
  //

  return (
    <div style={squareGameLayoutDiv}>
      <div />
      <div>{title}</div>
      <div />
      <div style={{ fontWeight: "bold" }}>
        {/* {PrintKeyValues(props.boardStructure)} */}
      </div>
      <div>{renderGrid}</div>
      <div>
        {moveList}
        {/* <button
          onClick={() => {
            loopOverMoves(changeToMove, winnerList.length);
          }}
        >
          Replay
        </button> */}
      </div>
      {/* <div>
        {winnerList}
        <button
          onClick={() => {
            loopOverMoves(changeToWinner, winnerList.length);
          }}
        >
          Replay
        </button>
      </div> */}
    </div>
  );

  // return renderGrid;
};
export default FcSquareGame;

function loopOverMoves(changeToMove: (i) => void, max: number) {
  const recurFunction = (i: number) => {
    pause(200);
    changeToMove(i);
  };
  recursiveCallback(0, max, recurFunction);

  // for (let move = 0; move < max; move++) {
  //   // devLog("move: ", move);
  //   // changeToMove(3);
  //   pause(200, () => {
  //     devLog("pause", move);
  //   });
  //   changeToMove(move);
  // }
}

function recursiveCallback(i: number, max: number, callback: (number) => void) {
  devLog("recur i: ", i, max);
  if (i == max) {
    //terminate
    return;
  } else {
    //recur
    callback(i);
    return recursiveCallback(i + 1, max, callback);
  }
}
// while (goOn) {
//   // other code
//   var [parents] = await Promise.all([
//       listFiles(nextPageToken).then(requestParents),
//       timeout(5000)
//   ]);
//   // other code
// }
