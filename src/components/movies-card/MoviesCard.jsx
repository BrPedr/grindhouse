import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Title = styled.div`
  color: black;
  width: 100%;
  white-space: nowrap;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-weight: 500;
  margin-top: 1em;
`;

const ImageContainer = styled.div`
  background-color: #0da199;
  width: 199px;
  height: 262px;
  margin-left: 2.5em;
`;

const MoviesCard = (props) => {
  return (
    <Container>
      <ImageContainer>
        <img src={props.url} alt="movie" />
        <Title>{props.title}</Title>
      </ImageContainer>
    </Container>
  );
};

export default MoviesCard;
