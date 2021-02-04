import React, {useReducer, useContext} from 'react'
import moviesReducer from './moviesReducer'
import moviesContext from './moviesContext'
import axios from "axios"

import {
    LIST_MOVIES,
    CREATE_MOVIE,
    DELETE_MOVIE
   } from '../types/types'



 const MoviesState = props => {

   const initialState = {
     moviesList: [],
     movies: null,
     movieSelected: null,
   }

// crear dispath y state
const [state, dispath] = useReducer(moviesReducer, initialState);


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


   return (
     <moviesContext.Provider
         value={{
            moviesList: state.moviesList,
            getMovies
         }}
       >
       {props.children}
     </moviesContext.Provider>
   )

 }


 export default MoviesState;