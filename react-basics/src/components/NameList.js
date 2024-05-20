import React from "react";

//https://codepen.io/gopinav/pen/gQpepq
function NameList() {
  const names = ["Ramesh", "Ravi", "Alok", "Lalit"];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default NameList;
