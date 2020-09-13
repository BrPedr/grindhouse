import { combineReducers } from "redux";

import searchMoviesReducer from "./searchMoviesReducer";
import configReducer from "./configReducer";
import searchTermReducer from "./searchTermReducer";
import getTopRatedMoviesReducer from "./getTopRatedMoviesReducer";
import getMovieDetailsReducer from './getMovieDetailsReducer'

export default combineReducers({
  search: searchTermReducer,
  searchMovies: searchMoviesReducer,
  config: configReducer,
  topMovies: getTopRatedMoviesReducer,
  movieDetails: getMovieDetailsReducer
});
