import {
  gridLayout,
  tileCoords,
} from "../../components/games/interfaces/squareGame";
import { devLog } from "./devLog";

export function logTileValue(tile: tileCoords, grid: gridLayout) {
  return;
  devLog("getTile: ", tile, grid[tile.x][tile.y]);
}
