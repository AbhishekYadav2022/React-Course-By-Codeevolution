// In class component, we tend to destructure props or state in render method

import React, { Component } from "react";

class DestructuringInClass extends Component {
  render() {
    const { myName, dogName, quality, food } = this.props;
    return (
      <div>
        <hr />
        <h1>Destructuring in class components</h1>
        <h4>
          Hello! I am {myName}. I have a pet dog named {dogName}. It is very{" "}
          {quality}. It likes to eat {food}.
        </h4>
      </div>
    );
  }
}

export default DestructuringInClass