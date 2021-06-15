import { combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";

export default combineReducers({
  todos: todoReducer,
});
