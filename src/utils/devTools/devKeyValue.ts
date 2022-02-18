import { CSSProperties } from "react";
import devCheck from "./devCheck";
import { devLog } from "./devLog";

const keyColor = "color: powderblue";
const valueColor = "color: orchid";
const clearColor = "";

export function devKeyValue(
  key: string | number,
  value: string | number | boolean | (number | string | boolean)[],
) {
  if (!devCheck()) {
    return;
  }
  devLog(`%c${key}%c: %c${value}`, keyColor, clearColor, valueColor);
  return;
}
