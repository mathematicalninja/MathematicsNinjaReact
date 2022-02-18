import { lineSignature } from "../../interfaces/lineSignature";
import { boardStructure } from "../../interfaces/lineStructure";
import sigToType from "./sigToType";

export function getLineStructure({
  boardStructure,
  sig,
}: {
  boardStructure: boardStructure;
  sig: lineSignature;
}): "fullOnly" | "subLines" | "none" {
  const [H, V, D]: ("fullOnly" | "subLines" | "none")[] = [];

  switch (sigToType(sig)) {
    case "horizontal":
      return boardStructure.HorizontalType;

    case "vertical":
      return boardStructure.verticalType;

    case "diagonal":
      return boardStructure.diagonalType;
  }
}

// :TODO:rename file correctly
