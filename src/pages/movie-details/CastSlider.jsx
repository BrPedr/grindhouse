import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";

import emtpyMovie from "../../assets/emtpyMovie.jpg";

export const ContainerCast = styled.div`
  height: 400px;

  @media (max-width: 1120px) {
    height: 250px;
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

  @media (max-width: 1120px) {
    font-size: 0.8em;
  }
`;

export const ImageCast = styled.img`
  object-fit: cover;
  width: 199px;
  height: 262px;
  filter: brightness(0.6);
  box-shadow: 5px 5px 10px #1f0a42;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-5%) scale(1.1);
    transition: 1s;
  }

  @media (max-width: 1120px) {
    width: 100px;
    height: 162px;
  }
`;

const CastSlider = ({ reducerResponse, primary }) => {
  const settings = {
    infinite: true,
    draggable: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: reducerResponse.length < 10 ? reducerResponse.length : 10,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 2203,
        settings: {
          slidesToShow: reducerResponse.length < 9 ? reducerResponse.length : 9,
        },
      },
      {
        breakpoint: 2003,
        settings: {
          slidesToShow: reducerResponse.length < 8 ? reducerResponse.length : 8,
        },
      },
      {
        breakpoint: 1803,
        settings: {
          slidesToShow: reducerResponse.length < 7 ? reducerResponse.length : 7,
        },
      },
      {
        breakpoint: 1603,
        settings: {
          slidesToShow: reducerResponse.length < 6 ? reducerResponse.length : 6,
        },
      },
      {
        breakpoint: 1403,
        settings: {
          slidesToShow: reducerResponse.length < 5 ? reducerResponse.length : 5,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: reducerResponse.length < 7 ? reducerResponse.length : 7,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: reducerResponse.length < 6 ? reducerResponse.length : 6,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: reducerResponse.length < 5 ? reducerResponse.length : 5,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: reducerResponse.length < 4 ? reducerResponse.length : 4,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: reducerResponse.length < 3 ? reducerResponse.length : 3,
        },
      },
    ],
  };

  const renderSlide = (
    <Slider {...settings}>
      {reducerResponse.map((movie, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {movie.profile_path !== null ? (
            <ImageCast
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w185${movie.profile_path}`}
              alt="actor"
            />
          ) : (
            <ImageCast
              key={movie.id}
              src={emtpyMovie}
              className="emptyMovie"
              alt="actor"
            />
          )}
          <Title primary={primary}>{movie.name}&nbsp;&nbsp;&nbsp; as</Title>
          <Title primary={primary}>{movie.character}</Title>
        </div>
      ))}
    </Slider>
  );

  return (
    <>
      <h2 className="ratings-title-Details">Cast</h2>
      <ContainerCast>{renderSlide}</ContainerCast>
    </>
  );
};
export default CastSlider;
