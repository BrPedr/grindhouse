import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getMovieDetails, getMovieCredits } from "../../actions/index";

import { ReactComponent as PlayButton } from "../../assets/play_circle.svg";

import Ratings from "../../components/ratings/Ratings";
import CastSlider from "./CastSlider";

import "./MovieDetails.css";

const MovieDetails = ({
  getMovieDetails,
  movieDetails,
  getMovieCredits,
  credits,
}) => {
  const [play, setPlay] = useState(0);
  const id = window.location.pathname.substr(15);

  useEffect(() => {
    getMovieDetails(id);
    getMovieCredits(id);
  }, [id, getMovieDetails, getMovieCredits]);

  const handleClick = () => {
    if (!play) {
      setPlay(1);
    }
  };

  const renderBanner = () => {
    if (!movieDetails.movieDetails) {
      return <h1>Loading</h1>;
    }
    if (!credits.credits) {
      return;
    }

    const movie = movieDetails.movieDetails.data;
    const castAndCrew = credits.credits.data.crew;
    const getJob = (knownFor) => castAndCrew.find((el) => el.job === knownFor);
    const hasCertification = (iso) =>
      movie.release_dates.results.find((el) => el.iso_3166_1 === iso);

    const isCertification = () => {
      if (hasCertification("US").release_dates[0].certification) {
        return hasCertification("US").release_dates[0].certification;
      }

      switch (hasCertification("US").release_dates[0].type) {
        case 0:
          return "NR";
        case 1:
          return "G";
        case 2:
          return "PG";
        case 3:
          return "PG-13";
        case 4:
          return "R";
        case 5:
          return "NC-17";
        default:
          return;
      }
    };

    //  const isCertification = () => {
    //    const type = hasCertification("US").release_dates[0].type;

    //    if (type === 4) {
    //      return "R";
    //    }
    //    if (type === 1) {
    //      return "G";
    //    }
    //  };
    // console.log(hasCertification("US").release_dates[0].certification);
    //  const x = () => Object.values(castAndCrew.find((crew) => crew));
    // console.log(getJob("Director"));
    return (
      <React.Fragment>
        <div className="container-Details">
          <img
            className={`${!play ? "active poster-Details" : "inactive"} `}
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="trailer"
          />
          {!movie.videos.results[0] ? null : (
            <iframe
              title="trailer"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              frameBorder="0"
              className={`${!play ? "inactive poster" : "active"} `}
            />
          )}
          <div
            className={`${!play ? "active movie-info-Details" : "inactive"} `}
          >
            <div className="title-and-director-Details">
              <h1 className="movie-title-Details">{movie.title}</h1>
              <h2 className="director-Details">
                Directed By {getJob("Director").name}
              </h2>
            </div>
            <div className="trailer-Details">
              <PlayButton
                onClick={() => handleClick()}
                style={{ cursor: "pointer" }}
              />
              <h3 className="play-text-Details">WATCH THE TRAILER</h3>
            </div>
          </div>
        </div>
        <div></div>
        <div className="year-and-duration-Details">
          <h3 className="release-date-Details">
            {movie.release_date.substr(-10, 4)}
          </h3>
          <h3 className="dot-Details">.</h3>
          <h3 className="duration-Details">{movie.runtime}min</h3>
          <h3 className="dot-Details">.</h3>
          <h3 className="certifications-Details">
            <div className="certifications-box-Details">
              {!hasCertification("US") ? "NF" : isCertification()}
            </div>
          </h3>
        </div>
        <div className="border-Details">
          <div className="description-wrapper-Details">
            <h3 className="description-Details">{movie.overview}</h3>
          </div>
        </div>
        <div className="genres-Details">
          {movie.genres.map((genre, index) => (
            <>
              <h3 className="genre-Details">{genre.name}</h3>
              {index < movie.genres.length - 1 ? (
                <h3 className="dot-Details">.</h3>
              ) : null}
            </>
          ))}
        </div>
        <div className="cast-and-crew-Details"></div>
        <Ratings />
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {renderBanner()}
      <>
        {!credits.credits ? null : (
          <CastSlider reducerResponse={credits.credits.data.cast} />
        )}
      </>
      {/* <Container>
        <Slide style={{ display: "flex", flexDirection: "row" }}>
          {!credits.credits
            ? null
            : credits.credits.data.cast.map((star) => (
                <Image
                  src={`https://image.tmdb.org/t/p/w185${star.profile_path}`}
                  alt="actor"
                />
              ))}
        </Slide>
      </Container> */}
    </React.Fragment>
  );
};

const mapStateToProps = ({ movieDetails, credits }) => ({
  movieDetails,
  credits,
});

export default connect(mapStateToProps, { getMovieDetails, getMovieCredits })(
  MovieDetails
);
