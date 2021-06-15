import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { submitEditTodo } from "../redux/actions/todoActions";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.items);

  const [editTodoStatus, setEditTodoStatus] = useState(false);
  const inputRef = useRef("");

  const onEditBtnSubmit = (id, text) => {
    const editedTasks = tasks.map((task) => {
      if (task.id === id && text !== "") {
        task.text = text;
      }
    });
  };
  const onEditBtn = () => {
    setEditTodoStatus(true);
  };

  const onEditCancel = () => {
    setEditTodoStatus(false);
  };

  const onEditSubmit = () => {
    setEditTodoStatus(false);

    onEditBtnSubmit(task.id, inputRef.current.value);
  };

  const onCheck = (id) => {
    tasks.map((task) => {
      if (task.id === id) {
        task.checked = !task.checked;
      }
    });
  };

  return (
    <>
      {!editTodoStatus ? (
        <div className="task">
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              defaultChecked={task.checked}
              onChange={() => onCheck(task.id)}
            />
            <p>{task.text}</p>
          </div>
          <div className="rigthtBtns">
            <button className="btn edit" onClick={onEditBtn}>
              Edit
            </button>
            <button className="deleteBtn btn">Delete</button>
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
            <button type="submit" onClick={onEditSubmit} className="btn">
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
