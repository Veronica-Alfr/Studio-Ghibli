import { REQUEST_LOADING_PEOPLE, REQUEST_FAILURE_PEOPLE,
  REQUEST_SUCESS_PEOPLE } from '../actions/typesActions';

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

const peoplesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_LOADING_PEOPLE:
    return { ...state, loading: true };
  case REQUEST_SUCESS_PEOPLE:
    return { ...state, loading: false, error: false, data: action.peoples };
  case REQUEST_FAILURE_PEOPLE:
    return { ...state, loading: false, error: true, data: [] };
  default:
    return state;
  }
};

export default peoplesReducer;
