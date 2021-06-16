import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pageClick } from "../redux/actions/todoActions";

const Pagination = () => {
  const tasks = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(tasks.length / 5); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    dispatch(pageClick(pageNumber));
  };

  return (
    <div className="paginationPages">
      {pageNumbers.map((number) => (
        <button onClick={() => paginate(number)} key={number} className="btn">
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
