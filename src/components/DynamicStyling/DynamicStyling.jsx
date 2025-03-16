import React, { useEffect, useState } from "react";

const DynamicStyling = () => {
  const [name, setName] = useState("");
  const [validInput, setValidInput] = useState(false);
  useEffect(() => {
    if (name.length < 3) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }, [name]);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input
        style={{ background: validInput ? "green" : "red" }}
        type="text"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default DynamicStyling;
