import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromButtonClick]);

  //   const handlClick =

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button
        onClick={() => {
          setIdFromButtonClick(id);
        }}
      >
        Change
      </button>
      <ul>{post.title}</ul>
    </div>
  );
}

export default DataFetching;
