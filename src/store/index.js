import { createStore } from "redux";
import { combineReducers } from "redux";
import amountRducer from "./amount/reducer";

const reducer = combineReducers({ amountRducer });

const store = createStore(reducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;