import React, { useRef, useState } from "react";

const TaskItem = ({ task }) => {
  const [editTodoStatus, setEditTodoStatus] = useState(false);
  const inputRef = useRef("");
  return (
    <>
      {!editTodoStatus ? (
        <div className="task">
          <div className="d-flex align-items-center">
            <input type="checkbox" defaultChecked={task.checked} />
            <p>{task.text}</p>
          </div>
          <div className="rigthtBtns">
            <button className="btn edit">Edit</button>
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
            <button type="submit" className="btn">
              Submit
            </button>
            <button className="editCancel btn">Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskItem;
