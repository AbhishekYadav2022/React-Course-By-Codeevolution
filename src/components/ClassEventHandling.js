import React, { Component } from 'react'

export class ClassClick extends Component {

  clickHandler(){
      console.log(`Clicked of click me button`)
  }

  render() {
    return (
      <div>
          <hr/>
          <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick