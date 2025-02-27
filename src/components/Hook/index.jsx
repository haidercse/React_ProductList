import React, { useState } from "react";

export default function Hook() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>This one test for Hook that's means functional componnet base</h1>
      <h2>Count : {count} </h2>
      <button
        className="button"
        onClick={handleIncrement}
        disabled={count >= 5 ? true : false}
      >
        +
      </button>
      <button
        className="button"
        onClick={handleDecrement}
        disabled={count <= -5 ? true : false}
      >
        -
      </button>
      <button className="button" onClick={handleReset}>
        0
      </button>
    </div>
  );
}
