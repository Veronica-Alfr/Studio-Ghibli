import { REQUEST_LOADING_FILMS, REQUEST_SUCESS_FILMS, REQUEST_FAILURE_FILMS,
REQUEST_FAILURE_FILM, REQUEST_SUCESS_FILM, REQUEST_LOADING_FILM } from '../actions/typesActions';

const INITIAL_STATE_FILMS = {
  data: [],
  error: false,
  loading: false,
};

const INITIAL_STATE_FILM = {
  data: {},
  error: false,
  loading: false,
};

export const filmsReducer = (state = INITIAL_STATE_FILMS, action) => {
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

export const filmReducer = (state = INITIAL_STATE_FILM, action) => {
  switch (action.type) {
    case REQUEST_LOADING_FILM:
      return { ...state, loading: true };
    case REQUEST_SUCESS_FILM:
      return { ...state, loading: false, error: false, data: action.film };
    case REQUEST_FAILURE_FILM:
      return { ...state, loading: false, error: true, data: {} };
    default:
      return state;
  };
};
