import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name</label>
          <input 
            type="text" 
            id="fname" 
            name="firstName" 
            placeholder="Your name.." 
            value={formData.firstName} 
            onChange={handleChange} 
          />

          <label htmlFor="lname">Last Name</label>
          <input 
            type="text" 
            id="lname" 
            name="lastName" 
            placeholder="Your last name.." 
            value={formData.lastName} 
            onChange={handleChange} 
          />


          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
