import React, { Component } from 'react'

 class ClassClick extends Component {

    clickHandler()
    {
        console.log("Clicked Click Me!!")
    }
  render() {
    return (
      <button onClick={this.clickHandler}>Click Me</button>
    )
  }
}

export default ClassClick