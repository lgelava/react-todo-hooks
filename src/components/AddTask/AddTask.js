import { useRef } from "react";

import { useDispatch } from "react-redux";

import { addTodo, pageChanger } from "../../redux/actions/todoActions";
import axios from "axios";

const AddTask = () => {
  const dispatch = useDispatch();
  const inputRef = useRef("");

  const onAdd = (title) => {
    const newTask = {
      title: title,
      checked: false,
    };

    if (newTask.title) {
      axios
        .post("http://localhost:9000/todos/addtodohandler", {
          title,
          checked: false,
        })
        .then((res) => {
          dispatch(addTodo(res.data));
        })

        .catch((e) => console.log("e", e));
    } else {
      alert("Write something");
    }
  };

  const onSubmit = () => {
    onAdd(inputRef.current.value);
    inputRef.current.value = "";
  };

  const onEnter = (e) => {
    console.log(e.target.value);
    if (e.keyCode === 13) {
      e.preventDefault();
      onSubmit();
    }
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Add Task"
        onKeyUp={onEnter}
        value={inputRef.value}
      />

      <button type="button" className="btn addTask" onClick={onSubmit}>
        {" "}
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
