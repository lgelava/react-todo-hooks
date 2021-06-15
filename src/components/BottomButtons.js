import React, { useState } from "react";
import CheckAll from "./CheckAll";

import { useSelector } from "react-redux";

const BottomButtons = ({ checkAll, onDeleteAllChecked }) => {
  const everyChecked = (currentValue) => currentValue.checked;

  const tasks = useSelector((state) => state.todos.items);

  return (
    <div>
      <div className="bottomBtnsDiv">
        {tasks.length > 0 && <CheckAll tasks={tasks} checkAll={checkAll} />}
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
