import React, { Component } from 'react'

class Message extends Component {

    // State Declaration Starts Here!
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thanks For Subscribing'
        })
    }
    // State Declaration Ends Here!

  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick ={()=> {this.changeMessage()}}>Subscribe</button>
      </div>
    )
  }
}
export default Message