import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="max-w-xl mx-auto p-4 bg-slate-400">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodoApp;
