import { RATED_MOVIES } from "../actions/actions.type";

export default (state = {}, action) => {
  switch (action.type) {
    case RATED_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};
