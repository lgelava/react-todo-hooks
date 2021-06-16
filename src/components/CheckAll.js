import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { checkAllTodos } from "../redux/actions/todoActions";
const CheckAll = () => {
  const everyChecked = (currentValue) => currentValue.checked;
  const tasks = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const checkAll = () => {
    const allChecked = tasks.map((item) => {
      return tasks.every(everyChecked)
        ? { ...item, checked: false }
        : { ...item, checked: true };
    });
    dispatch(checkAllTodos(allChecked));
    console.log(tasks);
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
