import { gridSizeToTileArray } from "../../../../utils/arrays/gridSizeToTileArray";
import { tileCoords } from "../../interfaces/squareGame";
import { loopOverLineSignatures } from "./loopOverLineSignatures";
import { anyLineInput } from "./anyLine";

export function loopOverTiles(props: anyLineInput): tileCoords[][] {
  let R: tileCoords[][] = [];
  const Tiles: tileCoords[] = gridSizeToTileArray(props.boardInfo.gridSize);

  Tiles.forEach((tile) => {
    const D: tileCoords[][] = loopOverLineSignatures();

    R = R.concat(D);
  });
  return R;
}
