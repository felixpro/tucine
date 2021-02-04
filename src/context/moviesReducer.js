import {
    LIST_MOVIES,
    CREATE_MOVIE,
    DELETE_MOVIE
   } from '../types/types'
  
  
  
  export default (state, action) => {
    switch(action.type) {
  
    case LIST_MOVIES:
      return {
          ...state,
          moviesList: action.payload
        }
  
      default:
        return state;
    }
  }