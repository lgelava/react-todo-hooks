import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckAll from "./CheckAll";
import {
  checkAllTodos,
  deleteAllTodosChecked,
  pageChanger,
} from "../../redux/actions/todoActions";

import "./BottomButtons.css";
import axios from "axios";

const BottomButtons = () => {
  const dispatch = useDispatch();

  const everyChecked = (currentValue) => currentValue.checked;

  const tasks = useSelector((state) => state.todos.items);

  const onDeleteAllChecked = () => {
    return axios
      .delete(`http://localhost:9000/todos/deletealltodoschecked`)
      .then(() => {
        dispatch(deleteAllTodosChecked());
      });
  };

  return (
    <div>
      <div className="bottomBtnsDiv">
        {tasks.length > 0 && <CheckAll />}
        {tasks.some(everyChecked) && (
          <button className="btn" onClick={() => onDeleteAllChecked()}>
            Delete All Checked
          </button>
        )}
      </div>
    </div>
  );
};

export default BottomButtons;
