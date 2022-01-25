import devCheck from "./devCheck";
import { devLog } from "./devLog";

export function bannerEnd(functionName: string) {
  if (!devCheck()) {
    return;
  }
  return;
  devLog(`${functionName}: ---end---`);
  // add in a if(dev) check
}
