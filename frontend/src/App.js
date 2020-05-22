import React, { useState } from "react";
import { useGameContext } from "./Context/GameContext";
import { NoGameStarted, SetTeams, GameActive } from "./Views";
import { Wrapper } from "./App.styles";

const App = () => {
  const { isGameStarted, isTeamsSet } = useGameContext();

  return (
    <Wrapper>
      {!isGameStarted && <NoGameStarted />}
      {isGameStarted && !isTeamsSet && <SetTeams />}
      {isGameStarted && isTeamsSet && <GameActive />}
    </Wrapper>
  );
};

export default App;
