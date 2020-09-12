import axios from "axios";

const api_key = "934938a052cda27936e7783f657c6ff6"

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzQ5MzhhMDUyY2RhMjc5MzZlNzc4M2Y2NTdjNmZmNiIsInN1YiI6IjVmNDU2ZTI2MmFjNDk5MDAzMjdkNmY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l5oaVR3tiMgm2f_9-Olrjybs5IzxRQnOFPpESEuC-oE";

const movie_id = "23424";

const MovieDb = axios({
  method: "get",
  url: `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=en-US`,
  // headers: {
  //   Authorization: `${ACCESS_TOKEN}`,
  //   "Content-Type": "application/json;charset=utf-8",
  // },
}).then((response) => response);
// .get(
//   "https://api.themoviedb.org/3/movie/76341?api_key=934938a052cda27936e7783f657c6ff6"
// )
// .then((response) => console.log(response));

export default MovieDb;
