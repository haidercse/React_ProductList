import React, { useState } from "react";
import Component_two from "./Component_two";
import { userContex } from "./UserContex";

const Component_One = () => {
  const [user, setUser] = useState({ id: "101", name: "Haider" });
  const [text, setText] = useState("Hello world");
  return (
    <userContex.Provider value={{user,text}}>
      <Component_two />
    </userContex.Provider>
  );
};

export default Component_One;
