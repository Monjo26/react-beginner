import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;

  const [count, setCount] = useState(initialCount);
  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };
  return (
    <div>
      Count : {count}
      {/* <button onClick={() => setCount(count + 1)}>Increment </button>
      <button onClick={() => setCount(count - 1)}>Decrement </button> */}
      <button onClick={() => setCount(initialCount)}>Reset </button>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment{" "}
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement{" "}
      </button>
      {/* <button onClick={() => setCount(count + 5)}>Increment by 5</button> */}
      <button onClick={incrementByFive}>Increment by 5</button>
    </div>
  );
}

export default HookCounterTwo;
