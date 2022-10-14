import API from "./baseURL";
import { REQUEST_LOADING_FILMS, REQUEST_SUCESS_FILMS, REQUEST_FAILURE_FILMS } from './typesActions';

export const receiveFilms = (films) => ({ type: REQUEST_SUCESS_FILMS, films });
export const requestFilms = (loading) => ({ type: REQUEST_LOADING_FILMS, loading });
export const errorInRequestFilms = (err) => ({ type: REQUEST_FAILURE_FILMS, err });

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
