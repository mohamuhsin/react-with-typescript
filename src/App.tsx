import Todo from "./models/todo";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function onAddTodoHandler(todoText: string) {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  }

  function onRemoveTodoHandler(todoId: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  }
  return (
    <>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todos} onRemoveTodo={onRemoveTodoHandler} />
    </>
  );
}

export default App;
