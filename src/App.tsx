import Todo from "./models/todo";
import Todos from "./components/Todos";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
