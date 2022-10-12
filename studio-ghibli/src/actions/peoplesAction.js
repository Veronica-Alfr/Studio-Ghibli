import API from "./baseURL";
import { REQUEST_LOADING, REQUEST_SUCESS_PEOPLE, REQUEST_FAILURE } from './typesActions';

export const receivePeoples = (peoples) => ({ type: REQUEST_SUCESS_PEOPLE, peoples });
export const requestPeoples = (loading) => ({ type: REQUEST_LOADING, loading });
export const errorInRequestPeoples = (err) => ({ type: REQUEST_FAILURE, err });

const fetchPeople = () => async (dispatch) => {
  try {
    dispatch(requestPeoples(true));
    const listPeoples = await API.get('/people');
    // puxar a função pra cá e fazer o dispatch com useDispatch aqui?
    console.log(listPeoples.data);

    return dispatch(receivePeoples(listPeoples.data));

  } catch (error) {
    console.error(error);
    dispatch(errorInRequestPeoples(error));
  }
};

export default fetchPeople;
