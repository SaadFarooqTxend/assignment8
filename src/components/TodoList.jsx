import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useContext(TodoContext);

  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-4 border rounded bg-slate-500 text-white"
        >
          <span
            className={`${
              todo.completed ? "line-through text-gray-400" : ""
            } cursor-pointer`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button
            onClick={() => removeTodo(todo.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
