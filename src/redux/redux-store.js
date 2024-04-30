import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {thunk} from "redux-thunk";
import movieCardReducer from "./movieсard-reducer";
import newMoviesReducer from "./newMovies-reducer";
import topMoviesReducer from "./topMovies-reducer";

let reducers = combineReducers({
    allData: movieCardReducer,
    newMovie: newMoviesReducer,
    topMovie: topMoviesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
window.__store__ = store;


export default store;