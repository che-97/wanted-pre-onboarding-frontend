import { useState } from "react";
import Card from "../ui/Card";
import classes from "./TodoItem.module.css";

function TodoItem(props) {
  const [todoCheck, setTodoCheck] = useState(props.isCompleted);
  const [todoDataInput, setTodoDataInput] = useState(props.todo);
  const [todoData, setTodoData] = useState(props.todo);
  const [edited, setEdited] = useState(false);

  function deleteTodo() {
    props.onDeleteTodo(props.id);
  }

  function editMode(){
    setEdited(true);
  }
  function viewMode(){
    setTodoDataInput(todoData);
    setEdited(false);
  }

  function onChangeTodoInput(todo) {
    setTodoDataInput(todo);
  }
  function updateCheckbox(checked) {
    const todoDto = {
      todo: todoData,
      isCompleted: checked,
    };
    props.onUpdateTodo(props.id, todoDto);
    setTodoCheck(checked);
  }

  function updateTodo() {
    const todoDto = {
      todo: todoDataInput,
      isCompleted: todoCheck,
    };
   
    props.onUpdateTodo(props.id,todoDto);
    setTodoData(todoDataInput);
    setEdited(false);
  }

  return (
    <Card>
    <li>
      <label className={classes.itemLabel}>
        <input
          type="checkbox"
          defaultChecked={todoCheck}
          onChange={(e) => updateCheckbox(e.target.checked)}
        />
        {!edited && <span>{todoData}</span>}
      </label>
      {edited ? (
        <div className={classes.inlineblock}>
          <input data-testid="modify-input" onChange={(e) => onChangeTodoInput(e.target.value)} value={todoDataInput}/>
          <div className={classes.itemBtn}>
            <button className={classes.btn} data-testid="submit-button" onClick={updateTodo} >제출</button>
            <button className={classes.btn} data-testid="cancel-button" onClick={viewMode}>취소</button>
          </div>        
        </div>
      ) : (
        <div className={classes.itemBtn}>
          <button className={classes.btn}  data-testid="modify-button" onClick={editMode}>
            수정
          </button>
          <button className={classes.btn}  onClick={deleteTodo} data-testid="delete-button">
            삭제
          </button>
        </div>
      )}
    </li>
    </Card>
  );
}

export default TodoItem;
