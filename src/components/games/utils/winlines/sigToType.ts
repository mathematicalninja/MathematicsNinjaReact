import { lineSignature } from "../../interfaces/lineSignature";

/*
 * takes a line signature and converts it into a human readable line type
 */

function sigToType(
  lineSignature: lineSignature,
): "horizontal" | "vertical" | "diagonal" {
  if (lineSignature.vertical == 0) {
    return "horizontal";
  }
  if (lineSignature.horizontal == 0) {
    return "vertical";
  }
  return "diagonal";
}

export default sigToType;
