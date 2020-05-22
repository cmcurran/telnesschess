import React from "react";
import { useGameContext } from "../../Context/GameContext";
import Teams from "./Teams";
import { Wrapper } from "./GameActive.styles";

const GameActive = () => {
  const { gameBoard, makeMove } = useGameContext();
  return (
    <Wrapper>
      <Teams />
      <div>
        {gameBoard.map((rowValue, rowIndex) => {
          return (
            <div
              style={{
                display: "flex",
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
              }}
            >
              {rowValue.map((cellValue, columnIndex) => {
                return (
                  <div
                    style={{
                      borderLeft: "1px solid black",
                      borderRight: "1px solid black",
                    }}
                  >
                    {cellValue.position[0]}
                    {cellValue.position[1]}
                    {cellValue.move}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default GameActive;
