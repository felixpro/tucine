import {useEffect, useState, useContext, Fragment} from "react";
import moviesContext from '../context/moviesContext';

function Movies() {
  const moviesContexts = useContext(moviesContext)
  const {moviesLists, getMovies, deleteMovie} = moviesContexts;

  useEffect(()=>{
    getMovies()
  }, [])

  
  
  return (
    <div className="Movies">
        <h1>Todos las peliculas</h1>  
        {moviesLists.map(movie => (
          <Fragment> 
            <p>{movie.name}</p>
             <button
            type="submit"
            className="u-full-width button-primary"
            onClick={() => deleteMovie(movie._id, movie.name)}
            >
              Delete Movie
            </button>
            
          </Fragment>
        ))}
    </div>
  );
}

export default Movies;
