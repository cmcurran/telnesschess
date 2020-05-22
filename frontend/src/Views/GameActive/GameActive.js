import React from "react";
import { useGameContext } from "../../Context/GameContext";
import Teams from "./Teams";
import { Wrapper } from "./GameActive.styles";

const GameActive = () => {
  return (
    <Wrapper>
      <Teams />
    </Wrapper>
  );
};

export default GameActive;
