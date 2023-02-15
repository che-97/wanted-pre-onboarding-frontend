import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./AddTodo.module.css";

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
    <Card>
      <input
        className={classes.addinput}
        data-testid="new-todo-input"
        ref={inputRef}
      />
      <button
        className={classes.addbutton}
        data-testid="new-todo-add-button"
        onClick={add}
      >
        추가
      </button>
    </Card>
  );
}

export default AddTodo;
