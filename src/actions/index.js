import { movieDbInstance } from "../apis/moviedb/movieDb";
import {
  SEARCH_MOVIES,
  CONFIG_INSTANCE,
  SEARCH_TERM,
  RATED_MOVIES,
  MOVIE_DETAILS,
  UPCOMING_MOVIES,
  TRENDING_MOVIES
} from "./actions.type";

//typeOfSearch receives the string 'movie' or 'person'
export const searchMovies = (query) => async (dispatch) => {
  const response = await movieDbInstance
    .get("/search/movie", {
      params: { query: `${query}` },
    })
    .then((data) => data);

  dispatch({
    type: SEARCH_MOVIES,
    payload: response.data.results,
  });
};

export const configuration = () => async (dispatch) => {
  const config = await movieDbInstance.get("/configuration");

  dispatch({ type: CONFIG_INSTANCE, payload: config.data.images });
};

export const search = (query) => async (dispatch) => {
  const response = await query;

  dispatch({
    type: SEARCH_TERM,
    payload: response,
  });
};

export const getTopRatedMovies = () => async (dispatch) => {
  const getMovies = await movieDbInstance.get("/movie/top_rated");

  dispatch({
    type: RATED_MOVIES,
    payload: getMovies.data,
  });
};

export const getMovieDetails = (id) => async (dispatch) => {
  const response = await movieDbInstance.get(`/movie/${id}`, {
    params: {
      append_to_response: "videos, images",
    },
  });

  dispatch({
    type: MOVIE_DETAILS,
    payload: response,
  });
};

export const getUpcomingMovies = () => async (dispatch) => {
  const response = await movieDbInstance.get("/movie/upcoming");

  dispatch({
    type: UPCOMING_MOVIES,
    payload: response,
  });
};

// go to get-trending in the api again!
export const getTrendingMovies = () => async (dispatch) => {
  const response = await movieDbInstance.get("/trending/movie/week");

  dispatch({
    type: TRENDING_MOVIES,
    payload: response,
  });
};

// export const fetchImage = () => async (dispatch, configuration, image) => {
//   const config = await configuration;
//   const getImages = await config;

//   dispatch({type: "FETCH_IMAGE", payload: getImages[image]})
// };
