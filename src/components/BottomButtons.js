import React from "react";
import CheckAll from "./CheckAll";
import {
  checkAllTodos,
  currentPageDecremented,
  samePage,
} from "../redux/actions/todoActions";
import { useSelector, useDispatch } from "react-redux";

const BottomButtons = () => {
  const dispatch = useDispatch();

  const everyChecked = (currentValue) => currentValue.checked;

  const tasks = useSelector((state) => state.todos.items);
  const currentPage = useSelector((state) => state.todos.currentPage);

  const onDeleteAllChecked = () => {
    let checkedLength = tasks.filter((task) => task.checked);
    let unCheckedLength = tasks.filter((task) => !task.checked);
    const deletedAllChecked = tasks.filter((task) => !task.checked);
    dispatch(checkAllTodos(deletedAllChecked));
    if ((tasks.length - checkedLength.length) % 5 === 0) {
      const pageDecremented = currentPage - 1;
      dispatch(currentPageDecremented(pageDecremented));
      if (currentPage === 1) {
        alert(1);
        const pageDecremented = currentPage;
        dispatch(currentPageDecremented(pageDecremented));
      }
    } else if (
      (tasks.length - checkedLength.length) % 5 !== 0 &&
      unCheckedLength.length > 0
    ) {
      if (unCheckedLength.length < 5) {
        const pageDecremented = currentPage - 1;
        dispatch(currentPageDecremented(pageDecremented));
        if (checkedLength.length >= 5) {
          const pageDecremented = currentPage - 1;
          dispatch(currentPageDecremented(pageDecremented));
        }
      }
    }
  };

  return (
    <div>
      <div className="bottomBtnsDiv">
        {tasks.length > 0 && <CheckAll />}
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
