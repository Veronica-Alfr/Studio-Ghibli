import API from './baseURL';
import { REQUEST_FAILURE_LOCATIONS, REQUEST_LOADING_LOCATIONS,
  REQUEST_SUCESS_LOCATIONS } from './typesActions';

const receiveLocations = (locations) => ({ type: REQUEST_SUCESS_LOCATIONS, locations });
const requestLocations = (loading) => ({ type: REQUEST_LOADING_LOCATIONS, loading });
const errorInRequestLocations = (err) => ({ type: REQUEST_FAILURE_LOCATIONS, err });

const fetchLocations = () => async (dispatch) => {
  try {
    dispatch(requestLocations(true));
    const locations = await API.get('/locations');
    console.log(locations.data);

    return dispatch(receiveLocations(locations.data));
  } catch (error) {
    console.error(error);
    dispatch(errorInRequestLocations(error));
  }
};

export { receiveLocations, requestLocations, errorInRequestLocations, fetchLocations };
