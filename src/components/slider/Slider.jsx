import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";

import ImageCard from "../image-card/ImageCard"

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1120px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

const Title = styled.div`
  color: ${(props) => (props.primary ? "black" : "#d33694")};
  width: 100%;
  white-space: wrap;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-weight: 500;
  margin-top: 1em;
`;

export const Slide = styled.div`
  background-color: #0da199;
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
  }
`;

// export const Image = styled.img`
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
//   filter: brightness(0.6);

//   &:hover {
//     filter: brightness(1.1);
//     transform: translateY(-5%) scale(1.1);
//     transition: 1s;
//   }
// `;

const Slider = ({ reducerResponse, primary }) => {
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

  return reducerResponse.map((movie, index) => (
    <>
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
            {/* <Image
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt="movie"
            /> */}
            <ImageCard
              movieId={movie.id}
              movieUrl={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            />
          </Link>
          <Title primary={primary}>{movie.title}</Title>
        </Slide>
      <Arrows>
        <ArrowLeft
          onClick={() => goToPrevSlide()}
          style={{ cursor: "pointer" }}
        />
        <ArrowRight
          style={{ marginLeft: "35px", cursor: "pointer" }}
          onClick={() => goToNextSlide()}
        />
      </Arrows>
    </>
  ));
};
export default Slider;
