import { useState } from "react";
import { React } from "react";

import { useSelector, useDispatch } from "react-redux";

import AddTask from "./AddTask";
import BottomButtons from "./BottomButtons";
import Pagination from "./Pagination";
import Task from "./Task";
import TaskItem from "./TaskItem";

import { addTodo } from "../redux/actions/todoActions";

const Tasks = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(5);

  // const [tasks, setTasks] = useState([]);

  const tasks = useSelector((state) => state.todos.items);

  //onEdit
  const onEditBtnClick = (id) => {};

  //onEdit Submit
  const onEditBtnSubmit = (id, title) => {
    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id && title !== "" ? { ...task, text: title } : task
    //   )
    // );
  };

  //onEdit Btn Cancel
  const onEditBtnCancel = (id) => {};

  // Add Task
  // const addTask = (title) => {
  //   const newTask = {
  //     id: Date.now(),
  //     text: title,
  //     checked: false,
  //   };

  //   if (newTask.text !== "") {
  //     dispatch(addTodo(newTask));
  //     // setTasks([...tasks, newTask]);
  //     setCurrentPage(Math.ceil((tasks.length + 1) / 5));
  //   } else {
  //     alert("Write something");
  //   }
  // };

  //Delete Task
  const deleteTask = (id) => {
    // setTasks(tasks.filter((task) => task.id !== id));
    if (Math.ceil(tasks.length / 5) - currentPage === 0) {
      setCurrentPage(Math.ceil((tasks.length - 1) / 5));
    }
  };

  //onCheck
  const checkTask = (id) => {
    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, checked: !task.checked } : task
    //   )
    // );
  };

  const checkAll = () => {
    const everyChecked = (currentValue) => currentValue.checked;
    // setTasks(
    //   tasks.map((task) => {
    //     return tasks.every(everyChecked)
    //       ? { ...task, checked: false }
    //       : { ...task, checked: true };
    //   })
    // );
  };

  const onDeleteAllChecked = () => {
    // setTasks(tasks.filter((task) => !task.checked));
    let checkedLength = tasks.filter((task) => task.checked);
    let unCheckedLength = tasks.filter((task) => !task.checked);
    if ((tasks.length - checkedLength.length) % 5 === 0) {
      setCurrentPage(currentPage - 1);
    } else if (
      (tasks.length - checkedLength.length) % 5 !== 0 &&
      unCheckedLength.length > 0
    ) {
      setCurrentPage(currentPage);
      if (unCheckedLength.length < 5) {
        setCurrentPage(currentPage - 1);
        if (checkedLength.length >= 5) {
          setCurrentPage(currentPage - 1);
        }
      }
    }
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  // const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
  return (
    <>
      <AddTask />
      <BottomButtons />

      {tasks.map((task) => {
        return (
          <TaskItem task={task} key={task.id}>
            {task.text}
          </TaskItem>
        );
      })}

      {/* <Pagination /> */}
    </>
  );
};

export default Tasks;
