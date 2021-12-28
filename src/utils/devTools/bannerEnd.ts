import { devLog } from "./devLog";

export function bannerEnd(functionName: string) {
  return;
  devLog(`${functionName}: ---end---`);
  // add in a if(dev) check
}
