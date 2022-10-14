import { REQUEST_FAILURE_LOCATIONS, REQUEST_LOADING_LOCATIONS, REQUEST_SUCESS_LOCATIONS } from '../actions/typesActions';

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

export const locationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_LOADING_LOCATIONS:
      return { ...state, loading: true };
    case REQUEST_SUCESS_LOCATIONS:
      return { ...state, loading: false, error: false, data: action.locations };
    case REQUEST_FAILURE_LOCATIONS:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  };
};
