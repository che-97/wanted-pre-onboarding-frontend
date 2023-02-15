import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { call } from "../../services/ApiService";
import classes from "./TodoList.module.css";

function TodoList(props) {
  const [todos, setTodos] = useState(props.todos);

  function addTodoHandler(todoData) {
    call("/todos", "POST", todoData)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setTodos((prevTodos) => {
          console.log(prevTodos);
          return prevTodos.concat(response);
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function removeTodoHandler(todoId) {
    call("/todos/" + todoId, "DELETE")
      .then((response) => {
        console.log(response);
        if (response.status !== 204) {
          return Promise.reject(response);
        }
        setTodos((prevTodos) => {
          return prevTodos.filter((todo) => todo.id !== todoId);
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  
  function updateTodoHandler(id,todoData){
    call("/todos/"+id, "PUT", todoData)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
        alert(error.message);
    });
  }

  return (
    <div>
      <AddTodo onAddTodo={addTodoHandler} />
      <ul className={classes.list}>
        {todos.length > 0 &&
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                id={todo.id}
                todo={todo.todo}
                isCompleted={todo.isCompleted}
                userId={todo.userId}
                onDeleteTodo={removeTodoHandler}
                onUpdateTodo={updateTodoHandler}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default TodoList;
