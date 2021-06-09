import { useRef } from "react";

const AddTask = ({ onAdd }) => {
  const inputRef = useRef("");

  const onSubmit = () => {
    onAdd(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <>
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
    </>
  );
};

export default AddTask;
