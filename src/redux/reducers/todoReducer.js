import { actionTypes } from "../actions/todoActions";

const initialState = {
  items: [],
  currentPage: 1,
};

export default function (state = initialState, action) {
  const { items } = state;
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        items: [...items, action.payload],
      };
    // case actionTypes.SUBMIT_EDIT_TODO:
    //   return {
    //     ...state,
    //     items: action.payload,
    //   };
    // case actionTypes.CHECK_ALL_TODOS:
    //   return {};
    default:
      return state;
  }
}
