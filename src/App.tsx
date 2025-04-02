import Todo from "./models/todo";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  function onAddTodoHandler(todoText: string) {}
  return (
    <>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todos} />
    </>
  );
}

export default App;
