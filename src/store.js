import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;
