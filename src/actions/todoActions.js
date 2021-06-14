import { DISPLAY_TODOS, ADD_TODO } from "./types";

export const addTodo = () => (dispatch) => {
  console.log("displaying");

  dispatch({
    type: ADD_TODO,
    payload: todos,
  });
};
