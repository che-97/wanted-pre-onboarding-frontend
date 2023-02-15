function TodoItem(props) {
  return (
      <li>
        <label>
          <input type="checkbox" defaultChecked={props.isCompleted} />
          <span>{props.todo}</span>
        </label>
        <button data-testid="modify-button">수정</button>
        <button data-testid="delete-button">삭제</button>
      </li>
  );
}

export default TodoItem;