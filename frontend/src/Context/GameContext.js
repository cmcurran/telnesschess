import React, { createContext, useContext, useState } from "react";
import gameBoardTemplate from "./GameBoardTemplate";

const GameContext = createContext(null);

const GameContextProvider = ({ children }) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [teams, setTeams] = useState({ teamX: [], teamO: [] });
  const [isTeamsSet, setIsTeamsSet] = useState(false);
  const [gameBoard, setGameBoard] = useState(gameBoardTemplate);

  const startGame = () => setIsGameStarted(true);

  const confirmTeamsSet = () => setIsTeamsSet(true);

  const makeMove = (coordinates, move) =>
    setGameBoard((prev) => (prev[coordinates[0]][coordinates[1]] = move));

  return (
    <GameContext.Provider
      value={{
        isGameStarted,
        teams,
        setTeams,
        isTeamsSet,
        startGame,
        confirmTeamsSet,
        gameBoard,
        makeMove,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
export const useGameContext = () => useContext(GameContext);
