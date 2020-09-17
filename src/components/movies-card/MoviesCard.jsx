import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "../upcomingMoviesCard/UpcomingMoviesCard";
import "./MoviesCard.css";

const CardBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => (props.primary ? "#ffffff" : "")};
  height: 500px;
`;

const BoxTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  width: 100%;
  white-space: nowrap;
  font-weight: 900;
  font-size: 3em;
  letter-spacing: 4px;
  text-align: center;
  color: ${(props) => (props.primary ? "black" : "#d33694")};
`;

const MoviesCard = ({ boxTitle, primary, children }) => {
   return (
    <CardBox primary={primary}>
      <div className="text">
        <BoxTitle primary={primary}>{boxTitle}</BoxTitle>
        <Link to="/more-movies" className="more-movies">
          {` Browse more ${boxTitle} movies`}
        </Link>
      </div>
        {children}
    </CardBox>
  );
};
export default MoviesCard;

// import React, { useState } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
// import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";

// import "../upcomingMoviesCard/UpcomingMoviesCard";
// import "./MoviesCard.css";

// export const Container = styled.div`
//   display: flex;
// `;

// const Title = styled.div`
//   color: ${(props) => (props.primary ? "black" : "#d33694")};
//   width: 100%;
//   white-space: nowrap;
//   font-family: "Roboto", sans-serif;
//   text-align: center;
//   font-weight: 500;
//   margin-top: 1em;
// `;

// export const Slide = styled.div`
//   background-color: #0da199;
//   width: 199px;
//   height: 262px;
//   margin-left: 2.5em;
// `;

// const Arrows = styled.div`
//   position: absolute;
//   right: 3%;
//   bottom: 3%;
// `;

// export const Image = styled.img`
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
//   filter: brightness(0.6);

//   &:hover {
//     filter: brightness(1.1);
//     transform: translateY(-5%) scale(1.1);
//     transition: 1s;
//   }
// `;

// const CardBox = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   width: 100%;
//   overflow: hidden;
//   background-color: ${(props) => (props.primary ? "#ffffff" : "")};
//   height: 500px;
// `;

// const BoxTitle = styled.h1`
//   font-family: "Roboto", sans-serif;
//   text-transform: uppercase;
//   width: 100%;
//   white-space: nowrap;
//   font-weight: 900;
//   font-size: 3em;
//   letter-spacing: 4px;
//   text-align: center;
//   color: ${(props) => (props.primary ? "black" : "#d33694")};
// `;

// const MoviesCard = ({ boxTitle, reducerResponse, primary }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const length = reducerResponse.length;

//   const goToPrevSlide = () => {
//     let index = activeIndex;
//     let currentLength = length;
//     if (index < 1) {
//       index = currentLength - 4;
//     } else {
//       index--;
//     }
//     setActiveIndex(index);
//   };

//   const goToNextSlide = () => {
//     let index = activeIndex;
//     let currentLength = length;
//     if (index === currentLength - 4) {
//       index = 0;
//     } else {
//       index++;
//     }

//     setActiveIndex(index);
//   };

//   const renderSlide = reducerResponse.map((movie, index) => (
//     <Slide
//       key={index}
//       // activeIndex={() => activeIndex}
//       className={
//         index === activeIndex ||
//         index === activeIndex + 1 ||
//         index === activeIndex + 2 ||
//         index === activeIndex + 3 ||
//         index === activeIndex + 4 ||
//         index === activeIndex + 5 ||
//         index === activeIndex + 6 ||
//         index === activeIndex + 7 ||
//         index === activeIndex + 8 ||
//         index === activeIndex + 9
//           ? "active"
//           : "inactive"
//       }
//     >
//       <Link to={`/movie-details/${movie.id}`}>
//         <Image
//           key={movie.id}
//           src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
//           alt="movie"
//         />
//       </Link>
//       <Title primary={primary}>{movie.title}</Title>
//     </Slide>
//   ));

//   return (
//     <CardBox primary={primary}>
//       <div className="text">
//         <BoxTitle primary={primary}>{boxTitle}</BoxTitle>
//         <Link to="/more-movies" className="more-movies">
//           {` Browse more ${boxTitle} movies`}
//         </Link>
//       </div>
//       <div>
//         <Container>{renderSlide}</Container>
//         <Arrows>
//           <ArrowLeft
//             onClick={() => goToPrevSlide()}
//             style={{ cursor: "pointer" }}
//           />
//           <ArrowRight 
//             style={{ marginLeft: "35px", cursor: "pointer" }}
//             onClick={() => goToNextSlide()}
//           />
//         </Arrows>
//       </div>
//     </CardBox>
//   );
// };
// export default MoviesCard;


// --------- first version ------------
// import React from "react";
// import styled, { keyframes } from "styled-components";

// import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
// import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";

// import Carousel from '../carousel/Carousel'

// import "../upcomingMoviesCard/UpcomingMoviesCard";

// const Container = styled.div`
//   display: flex;
// `;

// const Title = styled.div`
//   color: ${(props) => (props.primary ? "black" : "#d33694")};
//   width: 100%;
//   white-space: nowrap;
//   font-family: "Roboto", sans-serif;
//   text-align: center;
//   font-weight: 500;
//   margin-top: 1em;
// `;

// // const wobble = keyframes`
// // from
// //     {
// //         transform: rotate(0deg)
// //     }
// //     to {
// //         transform: rotate(360deg)
// // }
// // `;

// const Slide = styled.div`
//   background-color: #0da199;
//   width: 199px;
//   height: 262px;
//   margin-left: 2.5em;
//   /* :hover {
//     animation: ${wobble} 1s 1;
//   } */
// `;

// const Arrows = styled.div`
//   position: absolute;
//   right: 3%;
//   bottom: 3%;
// `;

// const Image = styled.img`
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
// `;

// const CardBox = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   width: 100%;
//   overflow: hidden;
//   background-color: ${(props) => (props.primary ? "#ffffff" : "")};
//   height: 500px;
// `;

// const BoxTitle = styled.h1`
//   font-family: "Roboto", sans-serif;
//   text-transform: uppercase;
//   width: 100%;
//   white-space: nowrap;
//   font-weight: 900;
//   font-size: 3em;
//   letter-spacing: 4px;
//   text-align: center;
//   color: ${(props) => (props.primary ? "black" : "#d33694")};
// `;

// const MoviesCard = ({ boxTitle, reducerResponse, primary }, props) => {
//   const handleClick = () => {};

//   return (
//     <CardBox primary={primary}>
//       <div className="text">
//         <BoxTitle primary={primary}>{boxTitle}</BoxTitle>
//         <a href="#" className="more-movies">
//           {` Browse more ${boxTitle} movies`}
//         </a>
//       </div>
//       <div>
//         <Container>
//           {reducerResponse.map((movie, index) => (
//             <Slide key={index} className={index === props.activeIndex ? 'active' : 'slide'}>
//               <Image key={movie.id}
//                 src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
//                 alt="movie"
//               />
//               <Title primary={primary}>{movie.title}</Title>
//             </Slide>
//           ))}
//         </Container>
//         <Arrows>
//           <ArrowLeft />
//           <ArrowRight style={{ marginLeft: '15px' }} onClick={(e) => console.log(e.target.value)}/>
//         </Arrows>
//       </div>
//     </CardBox>
//   );
// };
// export default MoviesCard;
