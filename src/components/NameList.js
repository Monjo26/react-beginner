import React from "react";

function NameList() {
  const names = ["a", "b", "c"];
  let nameList = names.map((name) => <h2>{name}</h2>);

  return (
    // <div>
    //   <h1>{names[0]}</h1>
    //   <h1>{names[1]}</h1>
    //   <h1>{names[2]}</h1>
    // </div>
    <div>
      {/* {names.map((name) => (
        <h2>{name}</h2>
      ))} */}
      {nameList}
    </div>
  );
}

export default NameList;
