import React from "react";
import { ToastContainer, toast } from 'react-toastify';
const ToasterMessage = () => {
  const handleNewTodo = () => {
    toast.success("New Todo is added");
  };
  const handleDeleteTodo = () => {
    toast.success("Todo is deleted");
  };
  return (
    <div>
      <h1>Todo App </h1>
      <button onClick={handleNewTodo}>Add new Todo</button>
      <button onClick={handleDeleteTodo}>Delete Todo</button>
      <ToastContainer />
    </div>
  );
};

export default ToasterMessage;
