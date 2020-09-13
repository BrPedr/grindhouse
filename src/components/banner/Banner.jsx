import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getTopRatedMovies, getMovieDetails } from "../../actions/index";

import { ReactComponent as PlayButton } from "../../assets/play_circle.svg";

import Spinner from "../spinner/Spinner";

import "./Banner.css";

const Banner = ({
  getTopRatedMovies,
  getMovieDetails,
  topMovies,
  movieDetails,
}) => {
  const [counter, setCounter] = useState(0);
  const maxNumberOfMoviesInLoop = 10;

  useEffect(() => {
    getTopRatedMovies("top_rated");
  }, [getTopRatedMovies]);

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 4500);
  });

  // useEffect(() => {
  //   if (!topMovies.movies) {
  //     return;
  //   }
  //   getMovieDetails(topMovies.movies.results[counter].id);
  // }, [counter])

  const renderBannerLoop = () => {
    if (!topMovies.movies) {
      return <Spinner />;
    }

    const moviesList = topMovies.movies.results[counter];
    if (counter === maxNumberOfMoviesInLoop) {
      setCounter(0);
    }

    return (
      <div className="container">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/original${moviesList.backdrop_path}`}
          alt=""
        />
        <div className="movie-info">
          <h1 className="movie-title">{moviesList.title}</h1>
          <div className="year-and-duration">
            <h3>{moviesList.release_date}</h3>
            {/* <h3 className="duration">1h30</h3> */}
          </div>
          <h3 className="description">{moviesList.overview}</h3>
          <div className="trailer">
            <PlayButton />
            <h3 className="play-button">WATCH THE TRAILER</h3>
          </div>
        </div>
      </div>
    );
  };

  return <React.Fragment>{renderBannerLoop()}</React.Fragment>;
};

const mapStateToProps = ({ topMovies, movieDetails }) => ({
  topMovies,
  movieDetails,
});

export default connect(mapStateToProps, { getTopRatedMovies, getMovieDetails })(
  Banner
);
