import React from "react";

interface printKeyValuesProps {
  [key: string]: printable;
}
type printable = string | number; //| JsxElement; //|JsxChild //?

const PrintKeyValues: React.FC<printKeyValuesProps> = (dictionary) => {
  let R: [string, printable, JSX.IntrinsicElements["br"]][] = [];
  for (const key in dictionary) {
    const txt = key + ": ";
    const val = dictionary[key];
    R.push([txt, val, <br />]);
  }
  return <>{R}</>;
};
export default PrintKeyValues;
