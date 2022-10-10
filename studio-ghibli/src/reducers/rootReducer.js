import { combineReducers } from "redux";
import filmsReducer from './filmsReducer';
import peoplesReducer from "./peoplesReducer";

const rootReducer = combineReducers({
    films: filmsReducer,
    peoples: peoplesReducer,
});

export default rootReducer;
