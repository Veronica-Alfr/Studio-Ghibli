import { REQUEST_LOADING, REQUEST_SUCESS, REQUEST_FAILURE } from '../actions/typesActions';

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

const filmsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_LOADING:
      return { ...state, loading: true };
    case REQUEST_SUCESS:
      return { ...state, loading: false, error: false, data: action.films };
    case REQUEST_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  };
};

export default filmsReducer;