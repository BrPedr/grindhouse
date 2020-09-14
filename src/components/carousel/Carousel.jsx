import React, { useState } from "react";
import styled from "styled-components";

const CarouselSlide = styled.div`
  
  /* flex-direction: row; */
  /* opacity: ${(props) => (props.active ? 1 : 0)}; */
  /* transition: all 0.5s ease; */
`;

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeSlide = children.map((slide, index) => (
    <CarouselSlide active={setCurrentSlide === index} key={index}>
      {slide}
    </CarouselSlide>
  ));
  
    console.log(currentSlide);
  
  return <div>{activeSlide}</div>;
};

export default Carousel;
