import { useState, useEffect } from 'react';

import {call} from '../services/ApiService';
import TodoList from '../components/todo/TodoList';

function TodoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTodos, setLoadedTodos] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    call("/todos", "GET")
    .then((response) => {
        console.log(response)
        setIsLoading(false);
        setLoadedTodos(response);
    })
    .catch((error) => {
        alert(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <TodoList todos={loadedTodos} />
    </section>
  );
}

export default TodoPage;