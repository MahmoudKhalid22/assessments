import React, { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [todo, setTodo] = useState({
    task: "",
    completed: false,
  });
  const [err, setErr] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim().length === 0) {
      setErr(true);
      return;
    }
    setErr(false);
    onAddTodo(todo);
    
    setTodo({
      ...todo,
      task: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo.task}
          onChange={(e) =>
            setTodo({
              ...todo,
              task: e.target.value,
              completed: false,
            })
          }
        />
        <button type="submit">Add</button>
      </form>
      {err && <p className="empty">The input should not be empty</p>}
    </>
  );
}

export default AddTodo;
