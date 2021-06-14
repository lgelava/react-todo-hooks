import { DISPLAY_TODOS, ADD_TODO } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DISPLAY_TODOS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
