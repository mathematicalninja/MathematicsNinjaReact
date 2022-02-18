import React from "react";
import { getPlayer } from "../utils/getPlayer";

interface makeTitleProps {
  currentPlayer;
  playerLogos;
}

const MakeTitle: React.FC<makeTitleProps> = ({
  currentPlayer,
  playerLogos,
}) => {
  return (
    <h3>
      current player:
      {getPlayer({ player: currentPlayer, players: playerLogos })}
    </h3>
  );
};
export default MakeTitle;
