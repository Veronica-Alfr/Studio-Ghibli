import { REQUEST_LOADING, REQUEST_FAILURE, REQUEST_SUCESS_PEOPLE } from '../actions/typesActions';

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

const peoplesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_LOADING:
      return { ...state, loading: true };
    case REQUEST_SUCESS_PEOPLE:
      return { ...state, loading: false, error: false, data: action.peoples };
    case REQUEST_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  };
};

export default peoplesReducer;