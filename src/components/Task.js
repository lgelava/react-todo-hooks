import {useRef} from "react";

const Task = ({task, onDelete, onCheck, onEdit, onEditBtnSubmit, onEditBtnCancel}) => {
 
    const inputRef = useRef(task.text);
    const onEditCancel = () => {
   
    onEditBtnCancel(task.id)
  }

  const onEditSubmit = () => {
      onEditBtnSubmit(task.id, inputRef.current.value)
  }

 
    return (
    <>
  {!task.editFormDisplayed  ? (
    <div className="task">
    <div className="d-flex align-items-center">
    <input type="checkbox"
     checked={task.checked} 
     onChange={() => onCheck(task.id)}/>
    <p>
        {task.text}
    </p>
    </div>    
    <div className="rigthtBtns">
    <button className="btn edit" onClick={() => onEdit(task.id)}>
        Edit</button>
    <button 
    onClick={() => onDelete(task.id)} 
    className="deleteBtn btn">Delete</button> 
    </div>
</div>): (
    <div className="task">
        <div className="editForm">
                <input
                ref={inputRef}
                type="text"
                className="editInput"
                value={inputRef.value}
                
              />
               <button 
                type="submit"
                className="btn"
                onClick={onEditSubmit}
              >
                Submit
              </button>
              <button className="editCancel btn" 
               onClick={onEditCancel}>
                Cancel
              </button>
        </div>
    </div>
)
}
 
  
  </>
  )}

export default Task;
