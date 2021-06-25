import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pageClick } from "../../redux/actions/todoActions";
import "./Pagination.css";

const Pagination = () => {
  const tasks = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const pageCount = useSelector((state) => state.todos.pageCount);
  const pageNumbers = [];

  useEffect(() => {
    for (let i = 1; i <= Math.ceil(tasks.length / 5); i++) {
      pageNumbers.push(i);
    }
  }, []);

  return (
    <div className="paginationPages">
      {pageNumbers.map((number) => (
        <button
          onClick={() => dispatch(pageClick(number))}
          key={number}
          className="btn"
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
