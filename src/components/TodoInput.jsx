import React, { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoInput = () => {
  const { addTodo } = useContext(TodoContext);
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (task.trim() === "") return;
    addTodo(task);
    setTask("");
  };

  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        className="border p-2 rounded w-full"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
