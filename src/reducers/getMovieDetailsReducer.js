import { MOVIE_DETAILS } from "../actions/actions.type";

export default (state = {}, action) => {
  switch (action.type) {
    case MOVIE_DETAILS:
      return { ...state, movieDetails: action.payload };
    default:
      return state;
  }
};
