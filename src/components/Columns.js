import React from "react";

function Columns() {
  const items = [];

  return (
    <>
      <td>Name</td>
      <td>Naruto</td>
    </>

    // <React.Fragment>
    //   {items.map((item) => (
    //     <React.Fragment key={item.key}>
    //       <h1>Title</h1>
    //       <p>{item.title}</p>
    //     </React.Fragment>
    //   ))}
    //   <td>Name</td>
    //   <td>Naruto</td>
    // </React.Fragment>

    //<React.Fragment>
    // <td>Name</td>
    // <td>You</td>
    //   </React.Fragment>
  );
}

export default Columns;
