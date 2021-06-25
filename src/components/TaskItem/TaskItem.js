import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "./TaskItem.css";
import axios from "axios";

import {
  submitEditTodo,
  checkTodo,
  deleteTodo,
} from "../../redux/actions/todoActions";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const [editTodoStatus, setEditTodoStatus] = useState(false);
  const inputRef = useRef("");

  const onEditSubmit = (id, title) => {
    if (inputRef.current.value) setEditTodoStatus(false);

    axios
      .put(`http://localhost:9000/todos/edittodo/${id}`, {
        title: title,
      })
      .then(() => dispatch(submitEditTodo(id, title)));
  };

  const onCheck = (id, checked) => {
    axios
      .put(`http://localhost:9000/todos/checktodos/${id}`, {
        checked: !checked,
      })
      .then(() => {
        dispatch(checkTodo(id, checked));
      });
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:9000/todos/deleteTodo/${id}`).then(() => {
      dispatch(deleteTodo(id));
    });
  };

  return (
    <>
      {!editTodoStatus ? (
        <div className="task">
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => onCheck(task._id, task.checked)}
            />
            <p>{task.title}</p>
          </div>
          <div className="rigthtBtns">
            <button
              className="btn edit"
              onClick={() => setEditTodoStatus(true)}
            >
              Edit
            </button>
            <button
              className="deleteBtn btn"
              onClick={() => deleteTask(task._id)}
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
              defaultValue={task.title || ""}
            />
            <button
              type="submit"
              onClick={() => onEditSubmit(task._id, inputRef.current.value)}
              className="btn"
            >
              Submit
            </button>
            <button
              onClick={() => setEditTodoStatus(false)}
              className="editCancel btn"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskItem;
