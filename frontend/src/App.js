import React, { useState } from "react";
import { NoGameStarted, SetTeams, GameActive } from "./Views";
import { Wrapper } from "./App.styles";
// const toggleCancel = () => setIsCancelDialog(prev => !prev);
const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [teams, setTeams] = useState({ teamX: [], teamO: [] });
  const [isTeamsSet, setIsTeamsSet] = useState(false);

  return (
    <Wrapper>
      {!isGameStarted && (
        <NoGameStarted setIsGameStarted={() => setIsGameStarted(true)} />
      )}
      {isGameStarted && !isTeamsSet && (
        <SetTeams
          setIsTeamsSet={() => setIsTeamsSet(true)}
          setTeams={setTeams}
        />
      )}
      {isGameStarted && isTeamsSet && <GameActive teams={teams} />}
    </Wrapper>
  );
};

export default App;
