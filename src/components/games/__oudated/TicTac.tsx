// import "./TicTac.scss";

import squareGame, { SquareGameState } from "./squareGame";

interface TicTacState {
  gridSize: [number, number];
}

interface TicTacProps extends SquareGameState {
  gridSize: [number, number];
  minimumDiagonal?: number;
  maximumDiagonal?: number;
}

class TicTac extends squareGame<TicTacState, TicTacProps> {}
export default TicTac;
