import React from "react";
import useFatch from "./useFatch";
const loadingMessage = <p>Data Loading.......</p>;

const dataFatch = () => {
  const { data, isLoading, errorMessage } = useFatch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const todosElement =
    data &&
    data.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div>
      <h1>Todo</h1>
      {errorMessage && errorMessage}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
};

export default dataFatch;
