import devCheck from "./devCheck";
import { devLog } from "./devLog";

export function bannerStart(functionName: string) {
  if (!devCheck()) {
    return;
  }
  return;
  devLog(`${functionName}: ---start---`);
  // add in a if(dev) check
}
