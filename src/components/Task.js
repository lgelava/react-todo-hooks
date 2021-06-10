import React, { useRef, useState } from "react";

const Task = ({
  task,
  onDelete,
  onCheck,
  onEdit,
  onEditBtnSubmit,
  onEditBtnCancel,
}) => {
  const inputRef = useRef("");
  const onEditCancel = () => {
    setEditTodoStatus(false);
    onEditBtnCancel(task.id);
  };

  const onEditSubmit = () => {
    setEditTodoStatus(false);

    onEditBtnSubmit(task.id, inputRef.current.value);
  };

  const [editTodoStatus, setEditTodoStatus] = useState(false);

  const onEditBtn = () => {
    setEditTodoStatus(true);
    // onEdit(task.id);
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
            <button className="btn edit" onClick={() => onEditBtn()}>
              Edit
            </button>
            <button onClick={() => onDelete(task.id)} className="deleteBtn btn">
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
            <button type="submit" className="btn" onClick={onEditSubmit}>
              Submit
            </button>
            <button className="editCancel btn" onClick={onEditCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
