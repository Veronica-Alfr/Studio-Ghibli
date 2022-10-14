import { combineReducers } from "redux";
import { filmsReducer } from './filmsReducer';
import { locationsReducer } from "./locationsReducer";
import { peoplesReducer } from "./peoplesReducer";

const rootReducer = combineReducers({
    films: filmsReducer,
    peoples: peoplesReducer,
    locations: locationsReducer,
});

export default rootReducer;
