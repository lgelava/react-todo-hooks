import { actionTypes } from "../actions/todoActions";

const initialState = {
  items: [],
  currentPage: 1,
  pageCount: 1,
};

export default function (state = initialState, action) {
  const { items } = state;
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        items: [...items, action.newTodo],
      };
    case actionTypes.SUBMIT_EDIT_TODO:
      return {
        ...state,
        items: items.map((el) =>
          el._id === action.id ? { ...el, title: action.newText } : el
        ),
      };
    case actionTypes.CHECK_TODO:
      return {
        ...state,
        items: items.map((item) =>
          item._id === action.id ? { ...item, checked: !action.checked } : item
        ),
      };
    case actionTypes.CHECK_ALL_TODOS:
      return {
        ...state,
        items: action.allChecked,
      };
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        items: items.filter((item) => item._id !== action.id),
      };
    case actionTypes.PAGE_CLICK:
      return {
        ...state,
        currentPage: action.pageNumber,
        pageCount: action.pageNumber,
      };
    case actionTypes.CURRENT_PAGE_CHANGED:
      return {
        ...state,
        currentPage: action.pageChangedAfterDelete,
      };

    case actionTypes.DELETE_ALL_CHECKED:
      return {
        ...state,
        items: items.filter((task) => !task.checked),
      };

    case actionTypes.GET_TODOS_HANDLER:
      return {
        ...state,
        items: action.todoList,
      };

    case actionTypes.PAGE_CHANGER:
      return {
        ...state,
        currentPage: Math.ceil(items.length / 5),
      };

    default:
      return state;
  }
}
