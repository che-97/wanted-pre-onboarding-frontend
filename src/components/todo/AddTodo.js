import { useRef } from "react";

function AddTodo(props) {
  const inputRef = useRef();

  function add() {
    const todo = inputRef.current.value;
    props.onAddTodo({
      todo: todo,
    });
    inputRef.current.value = "";
  }

  return (
    <div>
      <input data-testid="new-todo-input" ref={inputRef} />
      <button data-testid="new-todo-add-button" onClick={add}>
        추가
      </button>
    </div>
  );
}

export default AddTodo;
