import {useEffect, useState} from "react"
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { ReactQueryDevtools } from 'react-query/devtools'

var movieslistMovies = async function() {
 return await axios.get('https://myappinow.herokuapp.com/movies', {
  })
}

function Movies() {

  // peliculas tiene contenidos?
if (!movieslistMovies) return <p>No hay Peliculas.</p>;
  
  return (
    <div className="Movies">
        <h1>Todos las peliculas</h1>  
       
    </div>
  );
}

export default Movies;
