import React, { useState } from "react";
import MoviesCard from "../movies-card/MoviesCard";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [length, setLength] = useState();

  const goToPrevSlide = () => {
    if (activeIndex < 1) {
      return setActiveIndex(length - 1);
    } else {
      return setActiveIndex(-1);
    }
  };

  const goToNextSlide = () => {
    if (activeIndex === length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(+1);
    }
  };
  return <div>
    <MoviesCard/>
  </div>;
};

export default Slider;
