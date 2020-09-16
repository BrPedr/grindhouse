import React, { useEffect} from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

import { searchMovies } from "../../actions";

import emtpyMovie from "../../assets/emtpyMovie.jpg";

import "./Input-dropdown.css";

const InputDropdown = ({ searchMovies, search, movies }) => {
  useEffect(() => {
    if (search.currentSearch) {
      searchMovies(search.currentSearch);
    }

    return () => movies.currentMovieSearch;
  }, [search.currentSearch]);

  return (
    <div
      className={`search-dropdown ${
        !movies.currentMovieSearch ? null : "search-dropdown-visible"
      }`}
    >
      {!movies.currentMovieSearch ? (
        null
      ) : (
        Object.values(movies.currentMovieSearch).map((movie) => (
          <div key={movie.id} className="movie-details">
            <Link to={`/movie-details/${movie.id}`}>
            {movie.backdrop_path !== null ? (
              <div className="image-container">
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.backdrop_path}`}
                  alt={movie.title}
                  className="poster"
                />
              </div>
            ) : (
              <div className="image-container">
                <img
                  src={emtpyMovie}
                  alt={movie.title}
                  className="emtpyMovie"
                ></img>
              </div>
            )}</Link>
            <h5 className="title">{movie.title}</h5>
          </div>
        ))
      )}
    </div>
  );
};

const mapStateToProps = ({ searchMovies, search }) => ({
  movies: searchMovies,
  search,
});

export default connect(mapStateToProps, { searchMovies })(InputDropdown);
