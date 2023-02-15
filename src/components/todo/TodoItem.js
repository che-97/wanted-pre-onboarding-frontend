function TodoItem(props) {

  function deleteTodo(){
    props.onDeleteTodo(props.id)
  }

  return (
      <li>
        <label>
          <input type="checkbox" defaultChecked={props.isCompleted} />
          <span>{props.todo}</span>
        </label>
        <button data-testid="modify-button">수정</button>
        <button onClick={deleteTodo} data-testid="delete-button">삭제</button>
      </li>
  );
}

export default TodoItem;
