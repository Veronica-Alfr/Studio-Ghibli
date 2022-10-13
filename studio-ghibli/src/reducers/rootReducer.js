import { combineReducers } from "redux";
import { filmReducer, filmsReducer } from './filmsReducer';
import { peoplesReducer } from "./peoplesReducer";

const rootReducer = combineReducers({
    films: filmsReducer,
    peoples: peoplesReducer,
    film: filmReducer
});

export default rootReducer;
