import { useRef } from "react";

import { useDispatch } from "react-redux";

import { addTodo } from "../redux/actions/todoActions";

const AddTask = () => {
  const dispatch = useDispatch();
  const inputRef = useRef("");

  const onAdd = (title) => {
    const newTask = {
      id: Date.now(),
      text: title,
      checked: false,
    };

    if (newTask.text !== "") {
      dispatch(addTodo(newTask));
      // setTasks([...tasks, newTask]);
      // setCurrentPage(Math.ceil((tasks.length + 1) / 5));
    } else {
      alert("Write something");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <form>
      <input
        ref={inputRef}
        type="text"
        placeholder="Add Task"
        value={inputRef.value}
      />

      <button className="btn addTask" onClick={onSubmit}>
        {" "}
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
