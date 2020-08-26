import React from "react";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

const expression = "Mirror";

const Imdb = () => {
  const moviesInfo = () => {
    fetch(
      `https://imdb-api.com/en/API/SearchMovie/k_Qti9UE8C/${expression}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log({ movieInfo: result }))
      .catch((error) => console.log("error", error));
  };
  return <div>{moviesInfo()}</div>;
};

export default Imdb;
