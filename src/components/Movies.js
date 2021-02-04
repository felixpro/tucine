import {useEffect, useState, useContext, Fragment} from "react";
import moviesContext from '../context/moviesContext';

function Movies() {
  const moviesContexts = useContext(moviesContext)
  const {moviesList, getMovies} = moviesContexts;

  useEffect(()=>{
    getMovies()
  }, [])

  
  
  return (
    <div className="Movies">
        <h1>Todos las peliculas</h1>  
        {moviesList.map(movie => (
          <Fragment>
            <h1>{movie.name}</h1>
            <p>{movie.Description}</p>
          </Fragment>
        ))}
    </div>
  );
}

export default Movies;
