import React from "react";

import Banner from "../../components/banner/Banner";
import UpcomingMoviesCard from "../../components/upcomingMoviesCard/UpcomingMoviesCard";

import "./Homepage.css";

const Homepage = () => (
  <div>
    <Banner />
    <UpcomingMoviesCard />
  </div>
);

export default Homepage;
