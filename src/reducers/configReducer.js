import {CONFIG_INSTANCE} from '../actions/actions.type'

export default (state = {}, action) => {
  switch (action.type) {
    case CONFIG_INSTANCE:
      return { ...state, config: action.payload };
    default:
      return state;
  }
};
