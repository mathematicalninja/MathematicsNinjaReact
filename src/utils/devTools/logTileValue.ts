import {
  gridLayout,
  tileCoords,
} from "../../components/games/interfaces/squareGame";
import devCheck from "./devCheck";
import { devLog } from "./devLog";

export function logTileValue(tile: tileCoords, grid: gridLayout) {
  if (!devCheck()) {
    return;
  }
  return;
  devLog("getTile: ", tile, grid[tile.x][tile.y]);
}
