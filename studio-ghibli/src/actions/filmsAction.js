import API from "./baseURL";
import { REQUEST_LOADING_FILMS, REQUEST_SUCESS_FILMS, REQUEST_FAILURE_FILMS, 
  REQUEST_FAILURE_FILM, REQUEST_LOADING_FILM, REQUEST_SUCESS_FILM } from './typesActions';

export const receiveFilms = (films) => ({ type: REQUEST_SUCESS_FILMS, films });
export const requestFilms = (loading) => ({ type: REQUEST_LOADING_FILMS, loading });
export const errorInRequestFilms = (err) => ({ type: REQUEST_FAILURE_FILMS, err });

export const receiveFilmById = (film) => ({ type: REQUEST_SUCESS_FILM, film });
export const requestFilmById = (loading) => ({ type: REQUEST_LOADING_FILM, loading });
export const errorInRequestFilmById = (err) => ({ type: REQUEST_FAILURE_FILM, err });

export const fetchFilms = () => async (dispatch) => {
  try {
    dispatch(requestFilms(true));
    const listFilms = await API.get('/films');

    console.log(listFilms.data);

    return dispatch(receiveFilms(listFilms.data));

  } catch (error) {
    console.error(error);
    dispatch(errorInRequestFilms(error));
  }
};

export const fetchFilmsById = (filmId) => async (dispatch) => {
  try {
    dispatch(requestFilmById(true));
    const film = await API.get(`/films/${filmId}`);

    console.log(film.data);

    return dispatch(receiveFilmById(film.data));

  } catch (error) {
    console.error(error);
    dispatch(errorInRequestFilmById(error));
  }
};
