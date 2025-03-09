import React, { useState } from "react";

function NewTodo(props) {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onTodo(todo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTodo">New Todod</label>
        <input
          type="text"
          name="newTodo"
          id="newTodo"
          value={todo}
          onChange={handleChange}
        />
        <button>Add todo</button>
      </form>
    </div>
  );
}

export default NewTodo;
