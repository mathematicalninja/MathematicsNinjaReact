import loopOverTileGrid from "../../../../utils/arrays/loopOverTileGrid";
import { boardStructure } from "../../interfaces/lineStructure";
import { tileCoords } from "../../interfaces/squareGame";
import { winLineGrid } from "../squareWinLines";
import { loopOverLineSignatures } from "./loopOverLineSignatures";

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
  // TODO: take in boardStructure with optionals for mins and maxs then replace them if undefined

  let R: winLineGrid = [];
  function callback(point: tileCoords) {
    // `---callback start [${point.x}, ${point.y}]---`);
    R = R.concat(
      loopOverLineSignatures({
        // gridSize is 1-indexed, so max is off by 1
        boardMinMax: { max: { x: gridSize.x - 1, y: gridSize.y - 1 }, min },
        boardStructure,
        point,
      }),
    );
  }
  loopOverTileGrid({ gridSize: gridSize, callFunction: callback });
  // return sortDoubleArray(R);
  return R;
}
export default anyLine;
