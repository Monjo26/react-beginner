import React, { useState } from "react";
import useDoucmentTitle from "../../hooks/useDoucmentTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);

  useDoucmentTitle(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
    </div>
  );
}

export default DocTitleOne;
