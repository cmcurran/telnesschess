import React, { useState } from "react";
import { useGameContext } from "../../Context/GameContext";
import {
  Wrapper,
  Header,
  TeamWrapper,
  Player,
  AddPlayerForm,
  PlayerInput,
  AddPlayerButton,
  ConfirmTeamButton,
} from "./SetTeams.styles";

//to do: edit names before submitting team

const SetTeams = () => {
  const [isTeamXSet, setIsTeamXSet] = useState(false);
  const [teamX, setTeamX] = useState([]);
  const [teamO, setTeamO] = useState([]);
  const [player, setPlayer] = useState("");

  const { setTeams, confirmTeamsSet } = useGameContext();

  return (
    <Wrapper>
      <Header>{`add players for team ${!isTeamXSet ? "X" : "O"}`}</Header>
      <TeamWrapper>
        {!isTeamXSet
          ? teamX.map((value, i) => <Player key={i}>{value}</Player>)
          : teamO.map((value, i) => <Player key={i}>{value}</Player>)}
        <AddPlayerForm
          onSubmit={(e) => {
            e.preventDefault();
            !isTeamXSet
              ? setTeamX((prev) => [...prev, player])
              : setTeamO((prev) => [...prev, player]);
            setPlayer("");
          }}
        >
          <PlayerInput
            type="text"
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
          />
          <AddPlayerButton type="submit">add</AddPlayerButton>
        </AddPlayerForm>

        <ConfirmTeamButton
          onClick={
            !isTeamXSet
              ? () => setIsTeamXSet(true)
              : () => {
                  setTeams({ teamX, teamO });
                  confirmTeamsSet();
                }
          }
        >
          submit
        </ConfirmTeamButton>
      </TeamWrapper>
    </Wrapper>
  );
};

export default SetTeams;
