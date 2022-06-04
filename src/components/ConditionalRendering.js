// Note:-
// Conditional Rendering
// 1. if/else
// 2. Element variables
// 3. Ternary conditional operator
// 4. Short circuit operator

import React, { Component } from "react";

export class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  
  render() {
      //First Method of Conditional Rendering - Not right
      // These lines of code will not work because if else condition does not work in jsx
      // if (this.state.isLoggedIn) {
      //   return <h3>Welcome Abhishek</h3>;
      // } else {
      //   return <h3>Welcome Visitor</h3>;
      // }

    //First Method of Conditional Rendering - Right
    //   let message
    //   if (this.state.isLoggedIn) {
    //       message = <h3>Welcome Abhishek</h3>
    //   } else {
    //       message = <h3>Welcome Visitor</h3>
    //   }
    // return (
    //     <div>{message}</div>
    // )

    //Second Method of Conditional Rendering - Using ternary operators
    // return (
    //     this.state.isLoggedIn ?
    //     <h2>Welcome Abhishek</h2>:
    //     <h2>Welcome Visitor</h2>
    // )

    // Third Method of Conditional Rendering - Short circuit operator

    return (this.state.isLoggedIn && <h1>Welcome Abhishek</h1>)

  }
}

export default ConditionalRendering;
