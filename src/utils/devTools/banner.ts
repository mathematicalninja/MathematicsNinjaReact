import { CSSProperties } from "react";
import devCheck from "./devCheck";
import { devLog } from "./devLog";

const functionText = "color: steelblue";
// const C: CSSProperties = { color: "sandybrown" };
const C: CSSProperties = { color: "powderblue" };
// const C: CSSProperties = { color: "paleturquoise" };
// const C: CSSProperties = { color: "orchid" };
// const C: CSSProperties = { color: "orange" };
const valueText = `color: ${C.color}`;

const redText = " color: palevioletred;";
// const greenText = " color: palegreen;";
const greenText = " color: olivedrab;";
const clearStyles = "";

export function bannerNote(
  functionName: string,
  note: string,
  noteStyle: string,
  value?: string,
) {
  if (!devCheck()) {
    return;
  }
  const pValue = value ? ", %c" + value : "%c";
  devLog(
    `---%c${functionName}${pValue}%c: %c${note}%c---`,
    functionText,
    valueText,
    clearStyles,
    noteStyle,
    clearStyles,
  );
  return;
}

export function bannerStart(functionName: string, value?: string) {
  bannerNote(functionName, "start", greenText, value);
}

export function bannerEnd(functionName: string, value?: string) {
  bannerNote(functionName, "end", redText, value);
}
