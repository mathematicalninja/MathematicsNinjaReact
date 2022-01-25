import { gridLayout } from "../../components/games/interfaces/squareGame";
import devCheck from "./devCheck";
import { devLog } from "./devLog";

export function logGridValues(Grid: gridLayout) {
  if (!devCheck()) {
    return;
  }
  return;
  devLog("_____");
  for (let index = 0; index < Grid.length; index++) {
    const element = Grid[index];
    devLog(element);
  }
  devLog("^^^^^");
}
