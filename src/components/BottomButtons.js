import React from "react";
import CheckAll from "./CheckAll";
const BottomButtons = ({ tasks, checkAll, onDeleteAllChecked }) => {
  const everyChecked = (currentValue) => currentValue.checked;
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
