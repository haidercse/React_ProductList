import React, { useState } from "react";
import Todos from "./todos";
import NewTodo from "./NewTodo";
const dummyTodos = ["todo1", "todo2"];
function Home() {
  const [todos,setTodos] = useState(dummyTodos);
  const handleNewTodo = (newTodo) =>{
    setTodos([...todos,newTodo]);
  }
  return (
    <div>
      <NewTodo onTodo={handleNewTodo} />
      <Todos todos={todos}  />
    </div>
  );
}

export default Home;
