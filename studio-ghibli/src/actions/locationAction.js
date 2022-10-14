import API from "./baseURL";
import { REQUEST_FAILURE_LOCATIONS, REQUEST_LOADING_LOCATIONS, REQUEST_SUCESS_LOCATIONS } from './typesActions';

export const receiveLocations = (locations) => ({ type: REQUEST_SUCESS_LOCATIONS, locations });
export const requestLocations = (loading) => ({ type: REQUEST_LOADING_LOCATIONS, loading });
export const errorInRequestLocations = (err) => ({ type: REQUEST_FAILURE_LOCATIONS, err });

export const fetchLocations = () => async (dispatch) => {
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
