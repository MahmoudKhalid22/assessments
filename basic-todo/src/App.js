import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  // Initialize with an empty array
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    // Load the todo list from localStorage when the component mounts
    const savedTodo = JSON.parse(localStorage.getItem("todo"));
    if (savedTodo) {
      setTodo(savedTodo);
    }
  }, []);

  const getTodo = (data) => {
    const updatedTodo = [data, ...todo];
    setTodo(updatedTodo);
    localStorage.setItem("todo", JSON.stringify(updatedTodo));
  };

  const editTodo = (task, data) => {
    console.log(task, data);
    const updatedTodo = [...todo];
    const todoIndex = updatedTodo.findIndex((item) => item.task === task);

    if (todoIndex !== -1) {
      updatedTodo[todoIndex].completed = data;

      localStorage.setItem("todo", JSON.stringify(updatedTodo));

      setTodo(updatedTodo);
    }
  };

  const deleteTodo = (task) => {
    const currentTodo = JSON.parse(localStorage.getItem("todo")) || [];

    const todoIndex = currentTodo.findIndex((item) => item.task === task);

    if (todoIndex !== -1) {
      currentTodo.splice(todoIndex, 1);
      localStorage.setItem("todo", JSON.stringify(currentTodo));
      window.location.reload();
    }
  };

  return (
    <>
      <h1>Todo App</h1>
      <div className="container">
        <AddTodo onAddTodo={getTodo} />
        <TodoList
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
          todoList={todo}
        />
      </div>
    </>
  );
}

export default App;
