import { gridLayout } from "../../components/games/interfaces/squareGame";
import { devLog } from "./devLog";

export function logGridValues(Grid: gridLayout) {
  return;
  // ToDo: add in a dev check
  devLog("_____");
  for (let index = 0; index < Grid.length; index++) {
    const element = Grid[index];
    devLog(element);
  }
  devLog("^^^^^");
}
