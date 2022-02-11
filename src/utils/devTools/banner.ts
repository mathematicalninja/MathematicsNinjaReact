import devCheck from "./devCheck";
import { devLog } from "./devLog";

export function bannerStart(functionName: string, value?: string) {
  if (!devCheck()) {
    return;
  }
  const pValue = value ? ", " + value : "";
  devLog(
    `---%c${functionName}%c${pValue}%c: %cstart%c---`,
    functionText,
    valueText,
    clearStyles,
    greenText,
    clearStyles,
  );
  return;
  // add in a if(dev) check
}

export function bannerEnd(functionName: string, value?: string) {
  if (!devCheck()) {
    return;
  }
  const pValue = value ? ", " + value : "";
  devLog(
    `---%c${functionName}%c${pValue}%c: %cend%c---`,
    functionText,
    valueText,
    clearStyles,
    redText,
    clearStyles,
  );
  return;
  // add in a if(dev) check
}

const functionText = "";
const valueText = "";

const redText = " color: red;";
const greenText = " color: green;";
const clearStyles = "";
