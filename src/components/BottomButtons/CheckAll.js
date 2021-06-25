import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { checkAllTodos } from "../../redux/actions/todoActions";
import axios from "axios";

const CheckAll = ({}) => {
  const everyChecked = (currentValue) => currentValue.checked;
  const tasks = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const checkAll = () => {
    const allChecked = tasks.map((item) =>
      tasks.every(everyChecked)
        ? { ...item, checked: false }
        : { ...item, checked: true }
    );
    axios
      .put(`http://localhost:9000/todos/checkalltodos`, {
        checked: !tasks.every(everyChecked),
      })
      .then(() => {
        dispatch(checkAllTodos(allChecked));
      });
  };

  return (
    <>
      <button className="btn" onClick={() => checkAll()}>
        {tasks.every(everyChecked) ? "Uncheck All" : "Check All"}
      </button>
    </>
  );
};

export default CheckAll;
