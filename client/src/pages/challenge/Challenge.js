import React from "react";
import styled from "styled-components";
import ChallengeList from "../../components/Challenge/challengeList/ChallengeList";
import { challengeState } from "../../utils/dummydata";
import blob1 from "../../imges/blob1.svg";

const ChallengeContainer = styled.div`
  background-image: url(${blob1});
  height: 100vh;
  min-height: 1800px;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
`;

function Challenge() {
  return (
    <ChallengeContainer>
      <ChallengeList />;
    </ChallengeContainer>
  );
}

export default Challenge;
