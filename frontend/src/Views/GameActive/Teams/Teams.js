import React from "react";
import { Wrapper, TeamWrapper, TeamTitle, Player } from "./Teams.styles";

const Teams = ({ teams }) => {
  return (
    <Wrapper>
      <TeamWrapper>
        <TeamTitle>team X</TeamTitle>
        {teams.teamX.map((value, i) => (
          <Player key={i}>{value}</Player>
        ))}
      </TeamWrapper>
      <TeamWrapper>
        <TeamTitle>team O</TeamTitle>
        {teams.teamO.map((value, i) => (
          <Player key={i}>{value}</Player>
        ))}
      </TeamWrapper>
    </Wrapper>
  );
};

export default Teams;
