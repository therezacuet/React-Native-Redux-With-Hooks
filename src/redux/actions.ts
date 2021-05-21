import axios from 'axios';
import { GET_MOVIES, MOVIE_DETAILS, ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM } from './types';


// Construct a BASE URL for API endpoint
const API_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'bb925e230868e5ea561be5d9be231edb';
const PARAMS = 'page=1';
const GETMOVIE_URL = `${API_URL}popular?api_key=${API_KEY}&${PARAMS}`;

export const getMovies = () => {
  try {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
      const res = await axios.get(`${GETMOVIE_URL}`);

      if (res.data) {
        dispatch({
          type: GET_MOVIES,
          payload: res.data.results,
        });

        console.log(res.data);

      } else {
        console.log('Unable to fetch');
      }
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    // Add custom logic to handle errors
  }
};

export const getMovieDetails = (movieId:any)=>{
  try{

    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
      const res = await axios.get(`${API_URL}/${movieId}?api_key=${API_KEY}`);

      if (res.data) {
        dispatch({
          type: MOVIE_DETAILS,
          payload: res.data,
        });

        //console.log(res.data);

      } else {
        console.log('Unable to fetch');
      }

      console.log(`${API_URL}/${movieId}?api_key=${API_KEY}`);
    };

  }catch(error){

  }
};

export const addFavorite = (movie: any) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  dispatch({
    type: ADD_FAVORITE_ITEM,
    payload: movie,
  });
};

export const removeFavorite = (movie: any) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  dispatch({
    type: REMOVE_FAVORITE_ITEM,
    payload: movie,
  });
};