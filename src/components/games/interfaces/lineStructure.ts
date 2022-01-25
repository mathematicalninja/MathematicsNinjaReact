export interface boardStructure {
  diagonalType: "fullOnly" | "subLines" | "none";
  HorizontalType: "fullOnly" | "subLines" | "none";
  verticalType: "fullOnly" | "subLines" | "none";

  minHorizontal: number;
  maxHorizontal: number;

  minVertical: number;
  maxVertical: number;

  minDiagonal: number;
  maxDiagonal: number;
}
