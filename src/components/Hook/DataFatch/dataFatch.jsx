import React, { useEffect, useState } from "react";
const loadingMessage = <p>Data Loading.......</p>;

const dataFatch = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw Error("something is problem with data facthing");
        }
        return response.json();
      })
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
        setErrorMessage(null);
        // console.log(data);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setIsLoading(false);
      });
  }, []);
  const todosElement =
    todos &&
    todos.map((todo) => {
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
