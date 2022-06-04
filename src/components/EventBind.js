import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message:'Hello'
    }

    {/* Third approach of binding events */}
    // this.clickHandler = this.clickHandler.bind(this)
  }


//   clickHandler(){
//       this.setState({
//         message:'Goodbye!'
//       })
//   }

//   Fourth approach of binding events
     clickHandler = () => {
         this.setState({
             message:'Good Morning!'
         })
     }


  render() {
    return (
      <div>
        <hr/>
        <div>{this.state.message}</div>
        {/* First approach of Binding events */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* Second approach of binding events */}
        {/* Here we are calling the function so paranthesis is required */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* Third approach of binding events */}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* Fourth approach of binding events  */}
        <button onClick={this.clickHandler}>Click</button>



      </div>
    )
  }
}

export default EventBind