import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";

const initialState = {};

const store = createStore(rootReducer, initialState);

export default store;
