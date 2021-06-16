import { React } from "react";

import { useSelector } from "react-redux";

import AddTask from "./AddTask";
import BottomButtons from "./BottomButtons";
import Pagination from "./Pagination";
import Task from "./Task";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const currentPage = useSelector((state) => state.todos.currentPage);

  const tasks = useSelector((state) => state.todos.items);

  const indexOfLastTask = currentPage * 5;
  const indexOfFirstTask = indexOfLastTask - 5;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <>
      <AddTask />
      <BottomButtons />

      {currentTasks.map((task) => {
        return (
          <TaskItem task={task} key={task.id}>
            {task.text}
          </TaskItem>
        );
      })}

      <Pagination />
    </>
  );
};

export default Tasks;
