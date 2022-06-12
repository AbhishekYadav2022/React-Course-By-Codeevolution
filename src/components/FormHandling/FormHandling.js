import React, { Component } from "react";

export class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: ''
      }
      console.log(this.state.username)
    }

    handleUnsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    
  render() {
    return (
      <div>
        <form>
          <h2>
            <label>Username</label>
            <input type="text" value={this.state.username} onChange={this.handleUnsernameChange}/>
          </h2>
        </form>
      </div>
    );
  }
}

export default Form;
