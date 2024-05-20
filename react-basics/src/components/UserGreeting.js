import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome You</div>;

    // return this.state.isLoggedIn ? (
    //   <div>Welcome You</div>
    // ) : (
    //   <div>Welcome Guest </div>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome You</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return message;

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome You</div>;
    // } else {
    //   return <div>Welcome Guest()</div>;
    // }

    // return (
    //   <div>
    //     <div>Welcome You</div>
    //     <div>Welcome Guest()</div>
    //   </div>
  }
}

export default UserGreeting;
