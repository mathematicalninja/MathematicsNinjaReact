import { gridSizeToTileArray } from "../../../../utils/arrays/gridSizeToTileArray";
import { tileCoords } from "../../interfaces/squareGame";
import { loopOverLineSignatures } from "./loopOverLineSignatures";
import { anyLineInput } from "./anyLine";

export function loopOverTiles(props: anyLineInput): tileCoords[][] {
  let R: tileCoords[][] = [];
  const Tiles: tileCoords[] = gridSizeToTileArray(props.boardInfo.gridSize);
  // const boardStructure:boardStructure={}
  Tiles.forEach((tile) => {
    const D: tileCoords[][] = loopOverLineSignatures({
      point: tile,
      boardStructure: props.boardInfo.boardStructure,
      boardMinMax: { min: { x: 0, y: 0 }, max: props.boardInfo.gridSize },
    });

    R = R.concat(D);
  });
  return R;
}
