import { logo } from "../components/playerLogos";
import { tileCoords } from "../interfaces/squareGame";
import { getDefinedPlayer } from "./getPlayer";

export function calculatePlayer(moveList: tileCoords[], players: logo[]) {
  const M = moveList.length;
  let previousPlayer: number | null;
  if (M > 0) {
    previousPlayer = putPlayerInRange({ player: M - 1, players: players });
  } else {
    previousPlayer = null;
  }
  const currentPlayer = putPlayerInRange({
    player: M,
    players: players,
  });
  const nextPlayer = putPlayerInRange({ player: M + 1, players: players });
  return { prev: previousPlayer, curr: currentPlayer, next: nextPlayer };
}

function putPlayerInRange({
  player,
  players,
}: {
  player: number;
  players: logo[];
}) {
  return player % players.length;
}
