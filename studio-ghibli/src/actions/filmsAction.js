import API from "./baseURL";

export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_SUCESS = 'REQUEST_SUCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

export const receiveFilms = (films) => ({ type: REQUEST_SUCESS, films });

export const requestFilms = (loading) => ({ type: REQUEST_LOADING, loading });
export const errorInRequest = (err) => ({ type: REQUEST_FAILURE, err });

const fetchFilms = () => async (dispatch) => {
  try {
    dispatch(requestFilms(true));
    const listFilms = await API.get('/films');

    console.log(listFilms.data); // console vindo certim qnd só passa o <Home />, há um array de 22 objetos/filmes

    return dispatch(receiveFilms(listFilms.data));

    // const response = await fetch('https://ghibliapi.herokuapp.com/films', { method: 'get' });
    // const listFilms = await response.json();
  } catch (error) {
    console.error(error);
    dispatch(errorInRequest(error)); // tá passando aqui
  }
};

export default fetchFilms;
