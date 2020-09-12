import { SEARCH_TERM } from "../actions/actions.type";

export default (state = {}, action) => {
    switch (action.type) {
      case SEARCH_TERM:
        return { ...state, currentSearch: action.payload };
      default:
        return state;
    }
}