import {useState}from "react";
import AddTask from "./AddTask";
import Task from './Task';


const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Meeting with boss",
      checked: false,
      editFormDisplayed: false,
    },
    {
      id: 2,
      text: "Meeting with boss2",
      checked: false,
      editFormDisplayed: false,

    },
    {
      id: 3,
      text: "Meeting with boss3",
      checked: false,
      editFormDisplayed: false,

    },
  ])

  //onEdit
  const onEditBtnClick = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
    {...task, editFormDisplayed: true} : task
    ))
  };

  //onEdit Submit
  const onEditBtnSubmit = (id, title) => {
    setTasks(tasks.map((task) => task.id === id ?
    {...task, editFormDisplayed: false, text: title} : task
    ))
  };

  //onEdit Btn Cancel
  const onEditBtnCancel = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
    {...task, editFormDisplayed: false} : task
    ))
  };

  //Add Task
  const addTask = (title) => {
      const newTask = {
      id: Date.now(),
      text: title,
        checked: false,
        editFormDisplayed: false,
      }
      setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id ))
  }

  //onCheck
  const checkTask = (id) => {
      setTasks(tasks.map((task) => task.id === id ?
      {...task, checked: !task.checked} : task
      ))
  }

  console.log(tasks)
  

  return (
  <>  
   <AddTask onAdd={addTask}/>
    {tasks.map((task) =>
     <Task key={task.id} 
     task={task} 
     onDelete={deleteTask}
     onCheck={checkTask}
     onEdit={onEditBtnClick}
     onEditBtnSubmit={onEditBtnSubmit}
     onEditBtnCancel={onEditBtnCancel} 
     />
    )}
  </>
  )
};

export default Tasks;
