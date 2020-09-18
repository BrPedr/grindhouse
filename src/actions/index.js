import { movieDbInstance } from "../apis/moviedb/movieDb";
import {
  SEARCH_MOVIES,
  CONFIG_INSTANCE,
  SEARCH_TERM,
  RATED_MOVIES,
  MOVIE_DETAILS,
  UPCOMING_MOVIES,
  TRENDING_MOVIES,
  MOVIE_CREDITS,
} from "./actions.type";

export const searchMovies = (query, year) => async (dispatch) => {
  const response = await movieDbInstance
    .get("/search/movie", {
      params: {
        query: `${query}`,
        include_adult: true,
        year,
      },
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
      append_to_response: "videos,images,release_dates",
    },
  });

  dispatch({
    type: MOVIE_DETAILS,
    payload: response,
  });
};

export const getMovieCredits = (id) => async (dispatch) => {
  const response = await movieDbInstance.get(`/movie/${id}/credits`, {
    params: {
      append_to_response: "videos,images",
    },
  });

  dispatch({
    type: MOVIE_CREDITS,
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

export const getTrendingMovies = () => async (dispatch) => {
  const response = await movieDbInstance.get("/trending/movie/day");

  dispatch({
    type: TRENDING_MOVIES,
    payload: response,
  });
};