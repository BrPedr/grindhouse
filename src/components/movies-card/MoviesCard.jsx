import React from "react";
import styled from "styled-components";

import "../upcomingMoviesCard/UpcomingMoviesCard";

const Container = styled.div`
  display: flex;
`;

const Title = styled.div`
  color: ${(props) => (props.primary ? "black" : "#d33694")};
  width: 100%;
  white-space: nowrap;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-weight: 500;
  margin-top: 1em;
`;

const ImageContainer = styled.div`
  background-color: #0da199;
  width: 199px;
  height: 262px;
  margin-left: 2.5em;
`;

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => (props.primary ? "#ffffff" : "")};
  height: 400px;
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

const MoviesCard = ({ boxTitle, reducerResponse, primary }) => (
  <CardBox primary={primary}>
    <div className="text">
      <BoxTitle primary={primary}>{boxTitle}</BoxTitle>
      <a href="#" className="more-movies">
        {` Browse more ${boxTitle} movies`}
      </a>
    </div>
    <div>
      <div className="movies-container">
        {reducerResponse.map((movie) => (
          <Container keys={movie.id}>
            <ImageContainer>
              <img
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                alt="movie"
              />
              <Title primary={primary}>{movie.title}</Title>
            </ImageContainer>
          </Container>
        ))}
      </div>
    </div>
  </CardBox>
);

export default MoviesCard;
// ------------- VERSION TWO ---------------
// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import styled from "styled-components";

// import { getUpcomingMovies } from "../../actions/index";

// import Spinner from "../spinner/Spinner";

// import "../upcomingMoviesCard/UpcomingMoviesCard";

// const Container = styled.div`
//   display: flex;
// `;

// const Title = styled.div`
//   color: black;
//   width: 100%;
//   white-space: nowrap;
//   font-family: "Roboto", sans-serif;
//   text-align: center;
//   font-weight: 500;
//   margin-top: 1em;
// `;

// const ImageContainer = styled.div`
//   background-color: #0da199;
//   width: 199px;
//   height: 262px;
//   margin-left: 2.5em;
// `;

// const MoviesCard = ({ getUpcomingMovies, upcoming, boxTitle }) => {
//   useEffect(() => {
//     getUpcomingMovies();
//   }, [getUpcomingMovies]);

//   return (
//     <div className="upcoming-container">
//       <div className="text">
//         <h1 className="box-title">{boxTitle}</h1>
//         <a href="#" className="more-movies">
//           Browse more top movies
//         </a>
//       </div>
//       <div>
//         <div className="movies-container">
//           {!upcoming.movies ? (
//             <Spinner />
//           ) : (
//             upcoming.movies.data.results.map((movie) => (
//               <Container keys={movie.id}>
//                 <ImageContainer>
//                   <img
//                     src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
//                     alt="movie"
//                   />
//                   <Title>{movie.original_title}</Title>
//                 </ImageContainer>
//               </Container>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = ({ upcoming }) => ({
//   upcoming,
// });

// export default connect(mapStateToProps, { getUpcomingMovies })(MoviesCard);

// ------------- VERSION ONE ---------------
// import React from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
// `;

// const Title = styled.div`
//   color: black;
//   width: 100%;
//   white-space: nowrap;
//   font-family: "Roboto", sans-serif;
//   text-align: center;
//   font-weight: 500;
//   margin-top: 1em;
// `;

// const ImageContainer = styled.div`
//   background-color: #0da199;
//   width: 199px;
//   height: 262px;
//   margin-left: 2.5em;
// `;

// const MoviesCard = (props) => {
//   return (
//     <Container>
//       <ImageContainer>
//         <img src={props.url} alt="movie" />
//         <Title>{props.title}</Title>
//       </ImageContainer>
//     </Container>
//   );
// };

// export default MoviesCard;
