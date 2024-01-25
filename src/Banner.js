import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "./request";

function Banner() {
  const [movie, setMovie] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(requests.fetchNetflixOriginals);
  //   }
  //   fetchData();
  // }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}>
      <div className="banner__contents">
        {/* Title */}
        {/* Div > Two Buttons */}
        {/* Description */}
      </div>
    </header>
  );
}

export default Banner;
