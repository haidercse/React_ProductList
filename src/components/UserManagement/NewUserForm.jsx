import React, { useState } from "react";
import { UsersContextHook } from "../Hook/UsersContextHook";

const NewUserForm = () => {
  const { setUsers } = UsersContextHook();
  const [name, setName] = useState("");
  // Ensure this context is properly provided

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return; // Prevent adding empty users
    const newUser = { id: new Date().getTime().toString(), name };
    setUsers((oldUsers) => [...oldUsers, newUser]); // Renamed to "oldUsers" for clarity
    setName("");
  };

  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Simplified event handler
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUserForm;
