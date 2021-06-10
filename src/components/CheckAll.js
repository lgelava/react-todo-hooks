import React from "react";

const CheckAll = ({ tasks, checkAll }) => {
  const everyChecked = (currentValue) => currentValue.checked;
  return (
    <>
      <button className="btn" onClick={() => checkAll()}>
        {tasks.every(everyChecked) ? "Uncheck All" : "Check All"}
      </button>
    </>
  );
};

export default CheckAll;
