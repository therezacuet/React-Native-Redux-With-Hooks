import {GET_MOVIES, ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM, MOVIE_DETAILS} from './actions';

const initialState = {
  movies: [],
  movie: "",
  favorites: [],
};

function moviesReducer(state = initialState, action: { type: any; payload: { id: any; }; }) {
  switch (action.type) {
    case GET_MOVIES:
      return {...state, movies: action.payload};
    case MOVIE_DETAILS:
      return {...state, movie: action.payload};
    case ADD_FAVORITE_ITEM:
      return {...state, favorites: [...state.favorites, action.payload]};
    case REMOVE_FAVORITE_ITEM:
      return {
        ...state,
        favorites: state.favorites.filter(
          movie => movie.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}

export default moviesReducer;
