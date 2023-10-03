import React from "react";
import styles from "./TodoList.module.css";

function Todo({ todo, onEditTodo, onDeleteTodo }) {
  return (
    <div key={todo.task} className={styles.todoItem}>
      <p className={styles.task}>{todo.task}</p>
      <div className={styles.btns}>
        <button onClick={() => onEditTodo(todo.task, !todo.completed)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
            className={todo.completed ? styles.completed : styles.svgOne}
          >
            <path
              fill="currentColor"
              d="m1491 595l90 90l-749 749l-365-365l90-90l275 275l659-659zM1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t103-245t160-207t208-160T751 37t273-37zm0 1920q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32z"
            />
          </svg>
        </button>
        <button onClick={() => onDeleteTodo(todo.task)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={styles.svgTwo}
          >
            <path
              fill="currentColor"
              d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Todo;
