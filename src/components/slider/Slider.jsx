import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";

export const Container = styled.div`
  display: block;
  width: 55vw;
  height: 300px;

  @media (max-width: 1120px) {
    height: 300px;
    width: 85vw;
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

export const Image = styled.img`
  object-fit: cover;
  width: 199px;
  height: 272px;
  filter: brightness(0.6);
  box-shadow: 5px 5px 10px #1f0a42;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-5%) scale(1.1);
    transition: 1s;
  }

  @media (max-width: 1120px) {
    width: 110px;
    height: 162px;
  }
`;

const Slide = ({ reducerResponse, primary }) => {
  const settings = {
    infinite: true,
    draggable: true,
    swipeToSlide: true,
    initialSlide: 0,
    speed: 500,
    slidesToShow: 6,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    // className: currentSlide === activeIndex + 4 ? "active" : "inactive",
    responsive: [
      {
        breakpoint: 2103,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1703,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1403,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 797,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 405,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const renderSlide = (
    <Slider {...settings}>
      {reducerResponse.map((movie, index) => (
        <>
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link to={`/movie-details/${movie.id}`}>
              <div>
                <Image
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                />
              </div>
            </Link>
            <Title primary={primary}>{movie.title}</Title>
          </div>
        </>
      ))}
    </Slider>
  );

  return <Container>{renderSlide}</Container>;
};
export default Slide;