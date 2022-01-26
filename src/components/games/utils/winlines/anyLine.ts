import loopOverTileGrid from "../../../../utils/arrays/loopOverTileGrid";
import sortDoubleArray from "../../../../utils/arrays/sort";
import { devLog } from "../../../../utils/devTools/devLog";
import { boardStructure } from "../../interfaces/lineStructure";
import { tileCoords } from "../../interfaces/squareGame";
import { winLineGrid } from "../squareWinLines";
import { checkBounds } from "./checkBounds";
import diagonals from "./diagonals";
import { loopOverLineSignatures } from "./loopOverLineSignatures";
import { loopOverTiles } from "./loopOverTiles";
import { makeLinesHere } from "./makeLinesHere";

export interface anyLineInput {
  boardInfo: boardInfo;

  lineInfo: lineInfo;
}

interface lineInfo {}
interface boardInfo {
  gridSize: tileCoords; // gridSize is the same as the max
  // min: { x: 0; y: 0 };
  boardStructure: boardStructure;
}
function anyLine({
  gridSize, // gridSize is the same as the max
  boardStructure,
}: boardInfo) {
  const min = { x: 0, y: 0 };

  let R: winLineGrid = [];
  function callback(point: tileCoords) {
    devLog("POINT: ", point);
    R = R.concat(
      loopOverLineSignatures({
        bounds: { max: gridSize, min },
        boardStructure,
        point,
      }),
    );
  }
  loopOverTileGrid({ gridSize: gridSize, callFunction: callback });
  return sortDoubleArray(R);
  // return R;
}
export default anyLine;
