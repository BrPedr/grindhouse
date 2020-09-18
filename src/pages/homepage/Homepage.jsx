import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUpcomingMovies, getTrendingMovies } from "../../actions/index";

import Banner from "../../components/banner/Banner";
import MoviesCard from "../../components/movies-card/MoviesCard";
import Slide from "../../components/slider/Slider";

import "./Homepage.css";

const Homepage = ({
  getUpcomingMovies,
  upcoming,
  getTrendingMovies,
  trending,
}) => {
  useEffect(() => {
    getUpcomingMovies();
    getTrendingMovies();
  }, [getUpcomingMovies, getTrendingMovies]);

  return (
    <div>
      <Banner />
      <div>
        <MoviesCard boxTitle={"Upcoming"} primary>
          {!upcoming.movies ? null : (
            <Slide reducerResponse={upcoming.movies.data.results} primary />
          )}
        </MoviesCard>

        <MoviesCard
          boxTitle={"Trending"}
        >
          {!trending.movies ? null : (
            <Slide reducerResponse={trending.movies.data.results} />
          )}
        </MoviesCard>
      </div>
    </div>
  );
};

const mapStateToProps = ({ upcoming, trending }) => ({
  upcoming,
  trending,
});

export default connect(mapStateToProps, {
  getUpcomingMovies,
  getTrendingMovies,
})(Homepage);
