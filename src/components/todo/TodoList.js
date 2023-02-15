import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import {call} from '../../services/ApiService';

function TodoList(props) {
 
  const [todos, setTodos] = useState(props.todos);

  function addTodoHandler(todoData) {
     call("/todos", "POST", todoData)
    .then((response) => {
      setTodos((prevTodos)=>{
        return prevTodos.concat(response);
      });
    })
    .catch((error) => {
        alert(error.message);
    });
  }


  return (
    <div>
      <AddTodo onAddTodo={addTodoHandler} />
      <ul>
        {todos.map((todo) => {
          return <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
            userId={todo.userId} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
