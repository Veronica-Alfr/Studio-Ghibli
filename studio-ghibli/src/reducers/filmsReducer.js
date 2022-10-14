import { REQUEST_LOADING_FILMS, REQUEST_SUCESS_FILMS, REQUEST_FAILURE_FILMS } from '../actions/typesActions';

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

export const filmsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_LOADING_FILMS:
      return { ...state, loading: true };
    case REQUEST_SUCESS_FILMS:
      return { ...state, loading: false, error: false, data: action.films };
    case REQUEST_FAILURE_FILMS:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  };
};
