import { combineReducers } from "redux";

import searchMoviesReducer from "./searchMoviesReducer";
import configReducer from "./configReducer";
import searchTermReducer from './searchTermReducer'

export default combineReducers({
  search: searchTermReducer,
  searchMovies: searchMoviesReducer,
  config: configReducer,
});
