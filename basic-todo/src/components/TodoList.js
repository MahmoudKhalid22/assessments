import React from "react";
import Todo from "./Todo";

function TodoList({ onDeleteTodo, todoList, onEditTodo }) {
  return (
    <>
      {todoList?.map((item) => (
        <div className="todoList" key={item.task}>
          <Todo
            todo={item}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
          />
        </div>
      ))}
    </>
  );
}

export default TodoList;
