import React, { useEffect, useState } from "react"
import axios from "./axios";

function Row({title, fetchUrl}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.table(movies)

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies && movies.map(movie => (
          <
            img 
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            key={movie.id} 
            alt={movie.name} 
          />
        ))}
      </div>
    </div>
  )
}

export default Row;