import React, { createContext, useContext, useState } from "react";

const GameContext = createContext(null);

const GameContextProvider = ({ children }) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [teams, setTeams] = useState({ teamX: [], teamO: [] });
  const [isTeamsSet, setIsTeamsSet] = useState(false);

  const startGame = () => setIsGameStarted(true);

  const confirmTeamsSet = () => setIsTeamsSet(true);

  return (
    <GameContext.Provider
      value={{
        isGameStarted,
        teams,
        setTeams,
        isTeamsSet,
        startGame,
        confirmTeamsSet,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
export const useGameContext = () => useContext(GameContext);
