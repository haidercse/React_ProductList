import React from "react";
import { useState } from "react";
import User from "./User";
import NewUserForm from "./NewUserForm";
import { UsersContext } from "../../context/UsersContext";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "anisul" },
    { id: 2, name: "haider" },
    { id: 3, name: "rabbi" },
    { id: 4, name: "sumon" },
  ]);
  // const handleDeleteUser = (id) => {
  //   const filteredUser = users.filter((user) => user.id !== id);
  //   setUsers(filteredUser);
  // };
 
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <div>
        <NewUserForm  />
        <hr />
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </UsersContext.Provider>
  );
};

export default Users;
