import React from "react";
import styled, { keyframes } from "styled-components";

import "../upcomingMoviesCard/UpcomingMoviesCard";

const Container = styled.div`
  display: flex;
`;

const Title = styled.div`
  color: ${(props) => (props.primary ? "black" : "#d33694")};
  width: 100%;
  white-space: nowrap;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-weight: 500;
  margin-top: 1em;
`;

const wobble = keyframes`
from 
    {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
}
`;

const ImageContainer = styled.div`
  background-color: #0da199;
  width: 199px;
  height: 262px;
  margin-left: 2.5em;
  :hover {
    animation: ${wobble} 1s 1;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => (props.primary ? "#ffffff" : "")};
  height: 400px;
`;

const BoxTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  width: 100%;
  white-space: nowrap;
  font-weight: 900;
  font-size: 3em;
  letter-spacing: 4px;
  text-align: center;
  color: ${(props) => (props.primary ? "black" : "#d33694")};
`;

const MoviesCard = ({ boxTitle, reducerResponse, primary }) => {
  const handleClick = () => {};

  return (
    <CardBox primary={primary}>
      <div className="text">
        <BoxTitle primary={primary}>{boxTitle}</BoxTitle>
        <a href="#" className="more-movies">
          {` Browse more ${boxTitle} movies`}
        </a>
      </div>
      <div>
        <Container>
            {reducerResponse.map((movie) => (
              <ImageContainer keys={movie.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt="movie"
                />
                <Title primary={primary}>{movie.title}</Title>
              </ImageContainer>
            ))}
        </Container>
      </div>
    </CardBox>
  );
};
export default MoviesCard;
