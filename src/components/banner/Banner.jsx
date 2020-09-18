import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getTopRatedMovies, getMovieDetails } from "../../actions/index";

import { ReactComponent as PlayButton } from "../../assets/play_circle.svg";

import Spinner from "../spinner/Spinner";

import "./Banner.css";

const Banner = ({ getTopRatedMovies, topMovies }) => {
  const [counter, setCounter] = useState(0);
  const isMountedRef = useRef(null);
  const maxNumberOfMoviesInLoop = 10;

  useEffect(() => {
    getTopRatedMovies();

    if (!topMovies.movies) {
      return;
    }
    
    const {id} = topMovies.movies.results[counter];
    getMovieDetails(id);
  }, [getTopRatedMovies]);

  useEffect(() => {
    isMountedRef.current = true;
    const timer = () =>
      setTimeout(() => {
        setCounter(counter + 1);
      }, 4500);

    if (isMountedRef.current) {
      timer();
    }
    return () => clearTimeout(timer);
  });

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
        <Link to={`/movie-details/${moviesList.id}`}>
          <img
            ref={isMountedRef}
            className="poster"
            src={`https://image.tmdb.org/t/p/original${moviesList.backdrop_path}`}
            alt=""
          />

          <div className="movie-info">
            <h1 className="movie-title">{moviesList.title}</h1>
            <div className="year-and-duration">
              <h3 className="release-date">
                {moviesList.release_date.substr(-10, 4)}
              </h3>
              {/* <h3 className="duration">1h30</h3> */}
            </div>
            <h3 className="description">{moviesList.overview}</h3>{" "}
            <div className="trailer">
              <PlayButton className="play-button" />
              <h3 className="play-text">WATCH THE TRAILER</h3>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return <React.Fragment>{renderBannerLoop()}</React.Fragment>;
};

const mapStateToProps = ({ topMovies }) => ({
  topMovies,
});

export default connect(mapStateToProps, {
  getTopRatedMovies,
})(Banner);
