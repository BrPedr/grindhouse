import { combineReducers } from "redux";

import searchMoviesReducer from "./searchMoviesReducer";
import configReducer from "./configReducer";
import searchTermReducer from "./searchTermReducer";
import getTopRatedMoviesReducer from "./getTopRatedMoviesReducer";
import getMovieDetailsReducer from "./getMovieDetailsReducer";
import getUpcomingMovies from "./getUpcomingMovies.Reducer";
import getTrendingMoviesReducer from "./getTrendingMoviesReducer";

export default combineReducers({
  search: searchTermReducer,
  searchMovies: searchMoviesReducer,
  config: configReducer,
  topMovies: getTopRatedMoviesReducer,
  movieDetails: getMovieDetailsReducer,
  upcoming: getUpcomingMovies,
  trending: getTrendingMoviesReducer,
});
