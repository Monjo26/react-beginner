import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentComp2 extends Component {
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
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
      </div>
    );
  }
}

export default ParentComp2;
