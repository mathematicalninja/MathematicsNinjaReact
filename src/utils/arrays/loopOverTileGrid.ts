import { tileCoords } from "../../components/games/interfaces/squareGame";
import { gridSizeToTileArray } from "./gridSizeToTileArray";

interface loopOverTileGridInput<T> {
  callFunction: (tileCoords) => T;
  gridSize: tileCoords;
}

function loopOverTileGrid<T>({
  callFunction,
  gridSize,
}: loopOverTileGridInput<T>): T[] {
  let R: T[] = [];
  const Tiles: tileCoords[] = gridSizeToTileArray(gridSize);

  Tiles.forEach((tile) => {
    const D: T = callFunction(tile);

    R = R.concat(D);
  });
  return R;
}

export default loopOverTileGrid;
