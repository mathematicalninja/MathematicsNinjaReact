import { devLog } from "./devLog";

export function bannerStart(functionName: string) {
  return;
  devLog(`${functionName}: ---start---`);
  // add in a if(dev) check
}
