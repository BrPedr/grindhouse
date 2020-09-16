import { MOVIE_CREDITS } from "../actions/actions.type";

export default (state = {}, action) => {
  switch (action.type) {
    case MOVIE_CREDITS:
      return { ...state, credits: action.payload };
    default:
      return state;
  }
};
