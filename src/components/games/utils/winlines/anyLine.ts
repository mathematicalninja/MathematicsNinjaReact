import loopOverTileGrid from "../../../../utils/arrays/loopOverTileGrid";
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
  max: tileCoords;
  boardStructure: boardStructure;
}
function anyLine({
  gridSize, // gridSize is the same as the max
  max,
  boardStructure,
}: boardInfo) {
  const min = { x: 0, y: 0 };

  let R: winLineGrid = [];
  function callback(point: tileCoords) {
    R = R.concat(
      loopOverLineSignatures({
        bounds: { max, min },
        boardStructure,
        point,
        length,
      }),
    );
  }
  loopOverTileGrid({ gridSize: gridSize, callFunction: callback });
}
export default anyLine;
