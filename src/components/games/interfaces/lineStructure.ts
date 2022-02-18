export interface boardStructure {
  diagonalType: "fullOnly" | "subLines" | "none";
  minDiagonal: number;
  maxDiagonal: number;

  HorizontalType: "fullOnly" | "subLines" | "none"; //TODO decapitalise HorizontalType
  minHorizontal: number;
  maxHorizontal: number;

  verticalType: "fullOnly" | "subLines" | "none";
  minVertical: number;
  maxVertical: number;
}
