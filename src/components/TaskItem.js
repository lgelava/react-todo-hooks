import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  submitEditTodo,
  checkTodo,
  deleteTodo,
  currentPageChanged,
} from "../redux/actions/todoActions";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.items);
  const currentPage = useSelector((state) => state.todos.currentPage);

  const [editTodoStatus, setEditTodoStatus] = useState(false);
  const inputRef = useRef("");

  const onEditBtn = () => {
    setEditTodoStatus(true);
  };

  const onEditCancel = () => {
    setEditTodoStatus(false);
  };

  const onEditSubmit = (id) => {
    setEditTodoStatus(false);

    const updatedItems = tasks.map((el) => {
      return el.id === id ? { ...el, text: inputRef.current.value } : el;
    });

    dispatch(submitEditTodo(updatedItems));
  };

  const onCheck = (id) => {
    const checkedItems = tasks.map((item) => {
      return item.id === id ? { ...item, checked: !task.checked } : item;
    });
    dispatch(checkTodo(checkedItems));
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    dispatch(deleteTodo(filteredTasks));
    if (Math.ceil(tasks.length / 5) - currentPage === 0) {
      const pageChangedAfterDelete = Math.ceil((tasks.length - 1) / 5);

      dispatch(currentPageChanged(pageChangedAfterDelete));
    }
  };

  return (
    <>
      {!editTodoStatus ? (
        <div className="task">
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => onCheck(task.id)}
            />
            <p>{task.text}</p>
          </div>
          <div className="rigthtBtns">
            <button className="btn edit" onClick={onEditBtn}>
              Edit
            </button>
            <button
              className="deleteBtn btn"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className="task">
          <div className="editForm">
            <input
              ref={inputRef}
              type="text"
              className="editInput"
              defaultValue={task.text || ""}
            />
            <button
              type="submit"
              onClick={() => onEditSubmit(task.id)}
              className="btn"
            >
              Submit
            </button>
            <button onClick={onEditCancel} className="editCancel btn">
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskItem;
