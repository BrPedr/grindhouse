import React from "react";

import Banner from "../../components/banner/Banner";

import "./Homepage.css";

const Homepage = () => (
  <div>
    <div className="background-container">
      <div className="poster-container">
        <Banner />
      </div>
      <div className="top-movies-carousel"></div>
    </div>
  </div>
);

export default Homepage;
