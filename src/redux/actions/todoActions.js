export const actionTypes = {
  ADD_TODO: "ADD_TODO",
  EDIT_TODO: "EDIT_TODO",
  SUBMIT_EDIT_TODO: "SUBMIT_EDIT_TODO",
  CHECK_ALL_TODOS: "CHECK_ALL_TODOS",
};

export const addTodo = (payload) => ({
  type: actionTypes.ADD_TODO,
  payload,
});

export const submitEditTodo = (payload) => ({
  type: actionTypes.SUBMIT_EDIT_TODO,
  payload,
});

export const checkAllTodos = (payload) => ({
  type: actionTypes.CHECK_ALL_TODOS,
  payload,
});
