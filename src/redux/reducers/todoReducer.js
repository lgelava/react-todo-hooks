import { actionTypes } from "../actions/todoActions";

const initialState = {
  items: [],
  currentPage: 1,
};

export default function (state = initialState, action) {
  const { items } = state;

  console.log("currentPageChanged", action.currentPageChanged);
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        items: [...items, action.newTodo],
        currentPage: action.newPage,
      };
    case actionTypes.SUBMIT_EDIT_TODO:
      return {
        ...state,
        items: action.updatedItems,
      };
    case actionTypes.CHECK_TODO:
      return {
        ...state,
        items: action.checkedItems,
      };
    case actionTypes.CHECK_ALL_TODOS:
      return {
        ...state,
        items: action.allChecked,
      };
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        items: action.filteredTasks,
      };
    case actionTypes.PAGE_CLICK:
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    case actionTypes.CURRENT_PAGE_CHANGED:
      return {
        ...state,
        currentPage: action.pageChangedAfterDelete,
      };

    case actionTypes.CURRENT_PAGE_DECREMENTED:
      return {
        ...state,
        currentPage: action.pageDecremented,
      };

    //   return {};
    default:
      return state;
  }
}
