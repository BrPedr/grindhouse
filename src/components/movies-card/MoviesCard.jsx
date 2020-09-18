import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "../upcomingMoviesCard/UpcomingMoviesCard";
import "./MoviesCard.css";

const CardBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => (props.primary ? "#ffffff" : "")};
  height: 400px;

  @media (max-width: 1120px) {
    height: 250px;
    flex-direction: column;
  }
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

  @media (max-width: 1120px) {
    font-size: 1em;
    text-align: start;
    margin-left: 2.5em;
  }
`;

const MoviesCard = ({ boxTitle, primary, children }) => {
  return (
    <CardBox primary={primary}>
      <div className="text">
        <BoxTitle primary={primary}>{boxTitle}</BoxTitle>
        <Link to="/more-movies" className="more-movies">
          {` Browse more ${boxTitle} movies`}
        </Link>
      </div>
      {children}
    </CardBox>
  );
};
export default MoviesCard;