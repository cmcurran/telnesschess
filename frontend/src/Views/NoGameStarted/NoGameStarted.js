import React from "react";
import { Wrapper, NoGameLabel, StartGameButton } from "./NoGameStarted.styles";

const NoGameStarted = ({ setIsGameStarted }) => {
  return (
    <Wrapper>
      <NoGameLabel>no game started</NoGameLabel>
      <StartGameButton onClick={setIsGameStarted}>start a game</StartGameButton>
    </Wrapper>
  );
};

export default NoGameStarted;
