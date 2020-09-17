import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";

import emtpyMovie from "../../assets/emtpyMovie.jpg";

export const Container = styled.div`
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

export const Slide = styled.div`
  width: 199px;
  height: 262px;
  margin-left: 2.5em;

  @media (max-width: 1120px) {
    width: 130px;
    height: 192px;
    margin-left: 0.6em;
  }
`;

const Arrows = styled.div`
  position: absolute;
  right: 3%;
  bottom: 3%;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: brightness(0.6);
  box-shadow: 5px 5px 10px #1f0a42; 

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-5%) scale(1.1);
    transition: 1s;
  }
`;

const CardBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => (props.primary ? "#ffffff" : "")};
  height: 500px;

  @media (max-width: 1120px) {
    height: 340px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

// const BoxTitle = styled.h1`
//   font-family: "Roboto", sans-serif;
//   text-transform: uppercase;
//   width: 100%;
//   white-space: nowrap;
//   font-weight: 900;
//   font-size: 3em;
//   letter-spacing: 4px;
//   text-align: center;
//   color: ${(props) => (props.primary ? "black" : "#d33694")};
// `;

const MoviesCard = ({ boxTitle, reducerResponse, primary }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = reducerResponse.length;

  const goToPrevSlide = () => {
    let index = activeIndex;
    let currentLength = length;
    if (index < 1) {
      index = currentLength - 4;
    } else {
      index--;
    }
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    let index = activeIndex;
    let currentLength = length;
    if (index === currentLength - 4) {
      index = 0;
    } else {
      index++;
    }

    setActiveIndex(index);
  };

  const renderSlide = reducerResponse.map((movie, index) => (
    <Slide
      key={index}
      // activeIndex={() => activeIndex}
      className={
        index === activeIndex ||
        index === activeIndex + 1 ||
        index === activeIndex + 2 ||
        index === activeIndex + 3 ||
        index === activeIndex + 4 ||
        index === activeIndex + 5 ||
        index === activeIndex + 6 ||
        index === activeIndex + 7 ||
        index === activeIndex + 8 ||
        index === activeIndex + 9
          ? "active"
          : "inactive"
      }
    >
      <Link to={`/movie-details/${movie.id}`}>
        {movie.profile_path !== null ? (
          <Image
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w185${movie.profile_path}`}
            alt="actor"
          />
        ) : (
          <Image key={movie.id} src={emtpyMovie} alt="actor" />
        )}
      </Link>
      <Title primary={primary}>{movie.name}&nbsp;&nbsp;&nbsp; as</Title>
      <Title primary={primary}>{movie.character}</Title>
    </Slide>
  ));

  return (
    <>
      <h2 className="ratings-title-Details">Cast</h2>
      <CardBox primary={primary}>
        <Container style={{ paddingBottom: "100px" }}>{renderSlide}</Container>
        <Arrows>
          <ArrowLeft
            id="arrow-left"
            onClick={() => goToPrevSlide()}
            style={{ cursor: "pointer" }}
          />
          <ArrowRight
            id="arrow-right"
            style={{ marginLeft: "35px", cursor: "pointer" }}
            onClick={() => goToNextSlide()}
          />
        </Arrows>
      </CardBox>
    </>
  );
};
export default MoviesCard;
