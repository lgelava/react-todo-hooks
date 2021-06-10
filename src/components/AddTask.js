import { useRef } from "react";

const AddTask = ({ onAdd }) => {
  const inputRef = useRef("");

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
