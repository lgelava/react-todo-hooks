import { useRef } from "react";

import { useDispatch } from "react-redux";

import { addTodo } from "../redux/actions/todoActions";
import { useSelector } from "react-redux";

const AddTask = () => {
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const tasks = useSelector((state) => state.todos.items);

  const onAdd = (title) => {
    const newTask = {
      id: Date.now(),
      text: title,
      checked: false,
    };
    const newPage = Math.ceil((tasks.length + 1) / 5);

    if (newTask.text !== "") {
      dispatch(addTodo(newTask, newPage));
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
