import axios from "axios";

const api_key = "934938a052cda27936e7783f657c6ff6";

// export default axios.get("https://api.themoviedb.org/3/discover/movie?", {
//   params: {
//     api_key: api_key,
//     language: "en",
//     sort_by: "original_title.desc",
//   },
// });

export const movieDbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: api_key,
  },
});

// const configuration = movieDbInstance
//   .get("/configuration")
//   .then((res) => ({
//     baseImageUrl: res.data.images.secure_base_url,
//     backdropSizes: res.data.images.backdrop_sizes,
//     posterSizes: res.data.images.poster_sizes,
//   }))
//   .then((data) =>
//     console.log(
//       JSON.stringify(
//         data.baseImageUrl +
//           data.posterSizes[3] +
//           "/j0toVLrgLNuyGnUxGPnSfnPiSf5.jpg"
//       )
//     )
//   );
// .then((data) => console.log(data));

// _____________WORKING!!!!!!!!!!___________1
// const configuration = movieDbInstance.get("/configuration").then((res) => ({
//   baseImageUrl: res.data.images.secure_base_url,
//   backdropSizes: res.data.images.backdrop_sizes,
//   posterSizes: res.data.images.poster_sizes,
// }));

// const images = async () => {
//   const config = await configuration;
//   const getImages = await config;
//   console.log(
//     JSON.stringify(
//       getImages.baseImageUrl +
//         getImages.posterSizes[3] +
//         "/j0toVLrgLNuyGnUxGPnSfnPiSf5.jpg"
//     )
//   );
// };
// images();

// console.log(configuration);
// ________________WORKING!!!!!!!!___________________________1

//WORKING!!!2
// export const searchMovie = movieDbInstance
//   .get("/search/movie", {
//     params: { query: `${query}` },
//   })
//   .then((res) => res.data.results[0].id);

// export const searchPerson = movieDbInstance.get("/search/person", {
//   params: { query: `${query}` },
// });

// _____________WORKING!!!!!!!!!!___________3
// export const movieDetails = movieDbInstance.get("movie/91314", {
//   params: {
//     append_to_response: "videos, images",
//   },
// });

// console.log(movieDetails);
// ________________WORKING!!!!!!!!___________________________3

// const MovieList = ({ query }) => {
//   const getMovies = async () => {
//     const { data } = await axios.get(
//       "https://api.themoviedb.org/4/search/movie",
//       {
//         params: {
//           api_key: api_key,
//           query: `${query}`,
//         },
//       }
//     );

//     return data;
//   };

//   getMovies();

//   return <div></div>;
// };

// export default MovieList;

// export default axios.get("https://api.themoviedb.org/3/search/movie", {
//   params: {
//     api_key: api_key,
//     // query: `${term}`
//   },
// });
