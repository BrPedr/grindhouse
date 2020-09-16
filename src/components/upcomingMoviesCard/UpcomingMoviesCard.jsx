import React, { useEffect } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

import { getUpcomingMovies } from "../../actions/index";

import MoviesCard from "../movies-card/MoviesCard";
import Spinner from '../spinner/Spinner'

import "./upcomingMoviesCard.css";

const UpcomingMoviesCard = ({ getUpcomingMovies, upcoming }) => {
  useEffect(() => {
    getUpcomingMovies();
  }, [getUpcomingMovies]);

  return (
    <div className="upcoming-container">
      <div className="text">
        <h1 className="box-title">Upcoming</h1>
        <Link to="/more-movies" className="more-movies">
          Browse more top movies
        </Link>
      </div>
      <div>
        <div className="movies-container">
          {!upcoming.movies
            ? <Spinner />
            : upcoming.movies.data.results.map((movie) => (
                // <React.Fragment>
                //   <div keys={movie.id} className="image-container">
                //     <img
                //       src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                //       alt=""
                //     />
                //     <h4 className="title">{movie.original_title}</h4>
                //   </div>
                // </React.Fragment>
                <div keys={movie.id}>
                  <MoviesCard
                    title={movie.title}
                    url={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ upcoming }) => ({
  upcoming,
});

export default connect(mapStateToProps, { getUpcomingMovies })(
  UpcomingMoviesCard
);
