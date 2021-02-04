import {
    LIST_MOVIES,
    CREATE_MOVIE ,
    DELETE_MOVIE
   } from '../types/types'
  
  
  
  export default (state, action) => {
    switch(action.type) {
  
    case LIST_MOVIES:
      return {
          ...state,
          moviesLists: action.payload
        }
    case CREATE_MOVIE:
      return {
          ...state,
          moviesLists: [...state.moviesLists, action.payload ]
            }
    case DELETE_MOVIE:
          return {
            ...state,
            moviesLists: state.moviesLists.filter(movie=>movie.name !== action.payload)
               }
      default:
        return state;
    }
  }