import React, {useReducer, useContext} from 'react'
import moviesReducer from './moviesReducer'
import moviesContext from './moviesContext'
import axios from "axios"

import {
    LIST_MOVIES,
    CREATE_MOVIE,
    DELETE_MOVIE
   } from '../types/types';



 const MoviesState = props => {

   const initialState = {
     moviesLists: [],
     movies: null,
     movieSelected: null,
   }

// crear dispath y state
const [state, dispath] = useReducer(moviesReducer, initialState);


// get movies
const getMovies = () => {
    axios.get('https://myappinow.herokuapp.com/movies')
    .then(function (response) {
      dispath({
         type: LIST_MOVIES,
         payload: response.data
     })
    })
    .catch(function (error) {
      console.log(error);
    })
}

// CREATE movies
const createMovie = (movie) => {
  axios.post('https://myappinow.herokuapp.com/movies',movie )
    .then(function (response) {
      dispath({
         type: CREATE_MOVIE,
         payload: movie
     })
    })
    .catch(function (error) {
    console.log(error);
    })

}


// DELETE movies
const deleteMovie = (_id, name) => {
  axios.delete(`https://myappinow.herokuapp.com/movies/${_id}` )
    .then(function (response) {
      dispath({
         type: DELETE_MOVIE,
         payload: name
     })
    })
    .catch(function (error) {
    console.log(error);
    })
}


   return (
     <moviesContext.Provider
         value={{
            moviesLists: state.moviesLists,
            getMovies,
            createMovie,
            deleteMovie
         }}
       >
       {props.children}
     </moviesContext.Provider>
   )

 }


 export default MoviesState;