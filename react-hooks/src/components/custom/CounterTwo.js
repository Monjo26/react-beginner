import React from "react";
import useCounter from "../../hooks/useCounter";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(2);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterTwo;
