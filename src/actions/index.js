import { movieDbInstance } from "../apis/moviedb/movieDb";
import { SEARCH_MOVIES, CONFIG_INSTANCE, SEARCH_TERM } from "./actions.type";

//typeOfSearch receives the string 'movie' or 'person'
export const searchMovies = (query) => async (dispatch) => {
  const response = await movieDbInstance
    .get("/search/movie", {
      params: { query: `${query}` },
    })
    .then((data) => data);

  dispatch({
    type: SEARCH_MOVIES,
    payload: response.data.results,
  });
};

export const configuration = () => async (dispatch) => {
  const config = await movieDbInstance.get("/configuration");

  dispatch({ type: CONFIG_INSTANCE, payload: config.data.images });
};

export const search = (query) => async (dispatch) => {
  const response = await query;

  dispatch({
    type: SEARCH_TERM,
    payload: response,
  });
};

// export const fetchImage = () => async (dispatch, configuration, image) => {
//   const config = await configuration;
//   const getImages = await config;

//   dispatch({type: "FETCH_IMAGE", payload: getImages[image]})
// };
