import API from "./baseURL";

export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_SUCESS = 'REQUEST_SUCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

export const receivePeoples = (peoples) => ({ type: REQUEST_SUCESS, peoples });
export const requestPeoples = (loading) => ({ type: REQUEST_LOADING, loading });
export const errorInRequestPeoples = (err) => ({ type: REQUEST_FAILURE, err });

const fetchPeople = () => async (dispatch) => {
  try {
    dispatch(requestPeoples(true));
    const listPeoples = await API.get('/people');

    console.log(listPeoples.data);

    return dispatch(receivePeoples(listPeoples.data));

  } catch (error) {
    console.error(error);
    dispatch(errorInRequestPeoples(error));
  }
};

export default fetchPeople;
