import React, { useRef } from "react";

const UserForm = () => {
  const userNameRef = useRef();
  const userPasswordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const userPassword = userPasswordRef.current.value;
    userNameRef.current.style.background = "green";
    console.log({userName,userPassword}); 
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" ref={userNameRef}/>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" id="password" ref={userPasswordRef} />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
