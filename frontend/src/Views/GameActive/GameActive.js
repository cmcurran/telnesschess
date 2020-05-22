import React from "react";
import { useGameContext } from "../../Context/GameContext";
import Teams from "./Teams";
import { Wrapper } from "./GameActive.styles";

const GameActive = () => {
  const { teams } = useGameContext;

  return (
    <Wrapper>
      <Teams teams={teams} />
    </Wrapper>
  );
};

export default GameActive;
