import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Container = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%);
`;

const spin = keyframes`
from 
    {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
}
`;

const Loading = styled.div`
  border: 6px solid #ccc;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border-top-color: #1ecd97;
  border-left-color: #1ecd97;
  animation: ${spin} 1s infinite ease-in-out;
`;

const Spinner = () => (
  <Container>
    <Loading/>
  </Container>
);

export default Spinner;
