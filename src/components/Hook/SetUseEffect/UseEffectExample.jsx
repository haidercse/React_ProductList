import React, { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const handleOnClick = () => {
    setCount((count) => count + 1);
  };
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleOnClick}>+</button>
    </div>
  );
};

export default UseEffectExample;
