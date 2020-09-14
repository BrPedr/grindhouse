import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUpcomingMovies, getTrendingMovies } from "../../actions/index";

import Banner from "../../components/banner/Banner";
import MoviesCard from "../../components/movies-card/MoviesCard";

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
  }, [getUpcomingMovies]);

  return (
    <div>
      <Banner />
      <div>
        {!upcoming.movies ? null : (
          <MoviesCard
            boxTitle={"Upcoming"}
            reducerResponse={upcoming.movies.data.results}
            primary
          />
        )}
        {!trending.movies ? null : (
          <MoviesCard
            boxTitle={"Trending"}
            reducerResponse={trending.movies.data.results}
          />
        )}
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

// import React from "react";

// import Banner from "../../components/banner/Banner";
// import MoviesCard from "../../components/movies-card/MoviesCard";

// import "./Homepage.css";

// const Homepage = () => (
//   <div>
//     <Banner />
//     <MoviesCard boxTitle={'Upcoming'}/>
//   </div>
// );

// export default Homepage;
