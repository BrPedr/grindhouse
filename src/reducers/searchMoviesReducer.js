import { SEARCH_MOVIES } from "../actions/actions.type";

export default (state = {}, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return { ...state, currentMovieSearch: action.payload };
    default:
      return state;
  }
};
