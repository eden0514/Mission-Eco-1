import React from "react";
import styled from "styled-components";

export const Img = styled.img``;

const LoadingIndicator = (props) => {
  return <Img alt="now loading" src="ms.gif" />;
};

export default LoadingIndicator;
