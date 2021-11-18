// import "./TicTac.scss";

import squareGame, { SquareGameState } from "./squareGame";

interface TicTacState {
  gridSize: number[];
}

interface TicTacProps extends SquareGameState {}

class TicTac extends squareGame<TicTacState, TicTacProps> {}
export default TicTac;
