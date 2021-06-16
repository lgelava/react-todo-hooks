export const actionTypes = {
  ADD_TODO: "ADD_TODO",
  EDIT_TODO: "EDIT_TODO",
  SUBMIT_EDIT_TODO: "SUBMIT_EDIT_TODO",
  CHECK_TODO: "CHECK_TODO",
  CHECK_ALL_TODOS: "CHECK_ALL_TODOS",
  DELETE_TODO: "DELETE_TODO",
  PAGE_CLICK: "PAGE_CLICK",
  CURRENT_PAGE_CHANGED: "CURRENT_PAGE_CHANGED",
  CURRENT_PAGE_DECREMENTED: "CURRENT_PAGE_DECREMENTED",
};

export const addTodo = (newTodo, newPage) => ({
  type: actionTypes.ADD_TODO,
  newTodo,
  newPage,
});

export const submitEditTodo = (updatedItems) => ({
  type: actionTypes.SUBMIT_EDIT_TODO,
  updatedItems,
});

export const checkTodo = (checkedItems) => ({
  type: actionTypes.CHECK_TODO,
  checkedItems,
});

export const checkAllTodos = (allChecked) => ({
  type: actionTypes.CHECK_ALL_TODOS,
  allChecked,
});

export const deleteTodo = (filteredTasks) => ({
  type: actionTypes.DELETE_TODO,
  filteredTasks,
});

export const pageClick = (pageNumber) => ({
  type: actionTypes.PAGE_CLICK,
  pageNumber,
});

export const currentPageChanged = (pageChangedAfterDelete) => ({
  type: actionTypes.CURRENT_PAGE_CHANGED,
  pageChangedAfterDelete,
});

export const currentPageDecremented = (pageDecremented) => ({
  type: actionTypes.CURRENT_PAGE_DECREMENTED,
  pageDecremented,
});
