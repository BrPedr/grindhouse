export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_IMAGE":
      return { ...state, action };
    default:
      return state;
  }
};
