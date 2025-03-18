import React from "react";

import { UsersContextHook } from "../Hook/UsersContextHook";

const User = (props) => {
  const { id, name } = props.user;
  const { users, setUsers } = UsersContextHook();
  const handleDelete = (id) => {
    const filteredUser = users.filter((user) => user.id !== id);
    setUsers(filteredUser);
  };

  return (
    <section style={{ background: "purple" }}>
      <p style={{ color: "white" }}>{id}</p>
      <p style={{ color: "white" }}>{name}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
      <hr />
    </section>
  );
};

export default User;
