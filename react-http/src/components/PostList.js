import React, { Component } from "react";
import axios from "axios";

//https://jsonplaceholder.typicode.com/
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  //https://jsonplaceholder.typicode.com/posts1 --> for error
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log.apply(error);
        this.setState({ errorMsg: "Error in retrieving data" });
        //throw new Error("something happened");
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        List of Posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
