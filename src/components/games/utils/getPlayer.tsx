import { logo } from "../components/playerLogos";

export function getPlayer({
  player,
  players,
}: {
  player: number | null;
  players: logo[];
}): logo | null {
  let R: string | JSX.Element | null = null;
  if (player !== null && player !== undefined) {
    if (player > players.length) {
      const P = player % players.length;
      return players[P];
    }
    R = players[player];
  }
  return R;
}

export function getDefinedPlayer({
  player,
  players,
}: {
  player: number;
  players: logo[];
}): logo {
  let R: logo;
  if (player > players.length) {
    const P = player % players.length;
    return players[P];
  }
  R = players[player];
  return R;
}
