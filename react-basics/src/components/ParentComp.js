import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "You",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "You" });
    }, 2000);
  }

  render() {
    console.log("*************Parent Comp Render************");
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComponent;
