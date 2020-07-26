import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import  { restaurantReducer } from "./reducers/restaurantReducer"
import thunk from "redux-thunk";

const initialState = {};

const reducer = combineReducers({
    restaurantReducer :restaurantReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;