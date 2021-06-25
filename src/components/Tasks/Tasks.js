import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import AddTask from "../AddTask/AddTask";
import BottomButtons from "../BottomButtons/BottomButtons";
import Pagination from "../Pagination/Pagination";
import TaskItem from "../TaskItem/TaskItem";

import { getTodosHandler, pageChanger } from "../../redux/actions/todoActions";

import axios from "axios";

const Tasks = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.todos.currentPage);

  const tasks = useSelector((state) => state.todos.items);

  const indexOfLastTask = currentPage * 5;
  const indexOfFirstTask = indexOfLastTask - 5;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  useEffect(() => {
    axios
      .get("http://localhost:9000/todos/getAllToDos")
      .then((res) => dispatch(getTodosHandler(res.data)));
  }, []);

  useEffect(() => {
    dispatch(pageChanger());
  }, [tasks]);

  return (
    <>
      <AddTask />
      <BottomButtons />

      {currentTasks.map((task) => (
        <TaskItem task={task} key={task._id} />
      ))}

      <Pagination />
    </>
  );
};

export default Tasks;
