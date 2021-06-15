import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { checkAllTodos } from "../redux/actions/todoActions";
const CheckAll = () => {
  const everyChecked = (currentValue) => currentValue.checked;
  const tasks = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const checkAll = () => {
    // setTasks(
    //   tasks.map((task) => {
    //     return tasks.every(everyChecked)
    //       ? { ...task, checked: false }
    //       : { ...task, checked: true };
    //   })
    // );

    if (tasks.every(everyChecked)) {
      alert(1);
      tasks.map((task) => (task.checked = false));
    } else {
      alert(2);
      tasks.map((task) => (task.checked = true));
      console.log(tasks);
    }
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
