import { useState } from "react";

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
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={todoCheck}
          onChange={(e) => updateCheckbox(e.target.checked)}
        />
        {!edited && <span>{todoData}</span>}
      </label>
      {edited ? (
        <div>
          <input data-testid="modify-input" onChange={(e) => onChangeTodoInput(e.target.value)} value={todoDataInput}/>
          <button data-testid="submit-button" onClick={updateTodo} >제출</button>
          <button data-testid="cancel-button" onClick={viewMode}>취소</button>
        </div>
      ) : (
        <div>
          <button data-testid="modify-button" onClick={editMode}>
            수정
          </button>
          <button onClick={deleteTodo} data-testid="delete-button">
            삭제
          </button>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
