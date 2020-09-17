import React from 'react';
import styled from "styled-components";

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: brightness(0.6);
  box-shadow: 5px 5px 10px #1f0a42;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-5%) scale(1.1);
    transition: 1s;
  }
`;

const ImageCard = ({movieId, movieUrl}) => {
  return <Image key={movieId} src={movieUrl} alt="movie" />;
};
 
export default ImageCard;