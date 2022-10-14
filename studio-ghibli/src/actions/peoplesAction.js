import API from './baseURL';
import { REQUEST_LOADING_PEOPLE, REQUEST_SUCESS_PEOPLE,
  REQUEST_FAILURE_PEOPLE } from './typesActions';

const receivePeoples = (peoples) => ({ type: REQUEST_SUCESS_PEOPLE, peoples });
const requestPeoples = (loading) => ({ type: REQUEST_LOADING_PEOPLE, loading });
const errorInRequestPeoples = (err) => ({ type: REQUEST_FAILURE_PEOPLE, err });

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

export { receivePeoples, requestPeoples, errorInRequestPeoples, fetchPeople };
