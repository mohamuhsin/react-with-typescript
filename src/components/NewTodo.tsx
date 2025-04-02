const NewTodo = () => {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
