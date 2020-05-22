import React from "react";
import { useGameContext } from "../../Context/GameContext";
import { Wrapper, NoGameLabel, StartGameButton } from "./NoGameStarted.styles";

const NoGameStarted = () => {
  const { startGame } = useGameContext();
  return (
    <Wrapper>
      <NoGameLabel>no game started</NoGameLabel>
      <StartGameButton onClick={startGame}>start a game</StartGameButton>
    </Wrapper>
  );
};

export default NoGameStarted;
