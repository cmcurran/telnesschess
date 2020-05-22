import React from "react";
import Teams from "./Teams";
import { Wrapper } from "./GameActive.styles";

const GameActive = ({ teams }) => {
  return (
    <Wrapper>
      <Teams teams={teams} />
    </Wrapper>
  );
};

export default GameActive;
