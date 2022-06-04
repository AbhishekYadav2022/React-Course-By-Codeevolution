import React, { Component } from 'react'

class Counter extends Component {

    // State Declaration Starts Here!
    // It is not going to make any effect to code if we do not pass any param with the funtion like props here.
    // Snippet for generating these line of code is 'rconst'
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    increment(){
        // If you have to update our state based on the previous state make sure to pass a function inside object like this 
        // This function has access to the previous state that can be used to update the new state

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    // State Declaration Ends Here!

  render() {
    return (
      <div>
        <hr/>
        <h1>{this.state.count}</h1>
        <button onClick={() => {this.increment()}}>Increase</button>
      </div>
    )
  }
}

export default Counter