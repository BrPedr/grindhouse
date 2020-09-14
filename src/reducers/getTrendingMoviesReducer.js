import { TRENDING_MOVIES } from "../actions/actions.type";

export default (state = {}, action) => {
  switch (action.type) {
    case TRENDING_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};
