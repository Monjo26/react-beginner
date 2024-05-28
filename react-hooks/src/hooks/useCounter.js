import { useState } from "react";

function useCounter(initialState = 0, value = 1) {
  const [count, setCount] = useState(initialState);

  const increment = () => {
    setCount((preCount) => preCount + value);
  };

  const decrement = () => {
    setCount((preCount) => preCount - value);
  };

  const reset = () => {
    setCount(initialState);
  };
  return [count, increment, decrement, reset];
}

export default useCounter;
