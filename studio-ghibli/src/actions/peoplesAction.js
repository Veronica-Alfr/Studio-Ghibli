import API from "./baseURL";
import { REQUEST_LOADING, REQUEST_SUCESS, REQUEST_FAILURE } from './typesActions';

export const receivePeoples = (peoples) => ({ type: REQUEST_SUCESS, peoples });
export const requestPeoples = (loading) => ({ type: REQUEST_LOADING, loading });
export const errorInRequestPeoples = (err) => ({ type: REQUEST_FAILURE, err });

const fetchPeople = () => async (dispatch) => {
  try {
    dispatch(requestPeoples(true));
    const listPeoples = await API.get('/people');

    console.log(listPeoples.data);

    dispatch(receivePeoples(listPeoples.data));

    return listPeoples.data;

  } catch (error) {
    console.error(error);
    dispatch(errorInRequestPeoples(error));
  }
};

export default fetchPeople;
