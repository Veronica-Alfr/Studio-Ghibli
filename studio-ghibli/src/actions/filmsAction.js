import API from "./baseURL";
import { REQUEST_LOADING, REQUEST_SUCESS, REQUEST_FAILURE } from './typesActions';

export const receiveFilms = (films) => ({ type: REQUEST_SUCESS, films });
export const requestFilms = (loading) => ({ type: REQUEST_LOADING, loading });
export const errorInRequestFilms = (err) => ({ type: REQUEST_FAILURE, err });

// export const receiveFilmById = ({ film }) => ({ type: REQUEST_SUCESS, film });
// export const requestFilmById = (loading) => ({ type: REQUEST_LOADING, loading });
// export const errorInRequestFilmById = (err) => ({ type: REQUEST_FAILURE, err });

const fetchFilms = () => async (dispatch) => {
  try {
    dispatch(requestFilms(true));
    const listFilms = await API.get('/films');

    console.log(listFilms.data);

    return dispatch(receiveFilms(listFilms.data));

    // const response = await fetch('https://ghibliapi.herokuapp.com/films', { method: 'get' });
    // const listFilms = await response.json();
  } catch (error) {
    console.error(error);
    dispatch(errorInRequestFilms(error));
  }
};

// export const fetchFilmsById = () => async (dispatch) => { // Ver se funciona
//   try {
//     dispatch(requestFilmById(true));
//     const film = await API.get('/films/<id>');

//     console.log(film);

//     return dispatch(receiveFilmById(film));

//   } catch (error) {
//     console.error(error);
//     dispatch(errorInRequestFilmById(error));
//   }
// };

export default fetchFilms;
