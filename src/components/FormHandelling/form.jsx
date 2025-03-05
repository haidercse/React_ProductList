import React, { useState } from "react";

export default function form_handelling() {
 
  const [user, setUser] = useState({firstName: '',lastName: ''});
  const {firstName,lastName} = user;

  const handleChange = (e) => {
    console.log(e.target.name);
    setUser({...user,[e.target.name]: e.target.value});
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({firstName: '',lastName: ''});
   
  };
  return (
    <div>
      <h1>Registration Form </h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstName"
            placeholder="Your name.."
            value={firstName}
            onChange={handleChange}
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastName"
            placeholder="Your last name.."
            value={lastName}
            onChange={handleChange}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
