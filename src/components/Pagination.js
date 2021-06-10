import React from "react";

const Pagination = ({ tasks, paginate, tasksPerPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(tasks.length / tasksPerPage); i++) {
    pageNumbers.push(i);
  }
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
