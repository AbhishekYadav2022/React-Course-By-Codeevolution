import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Rohn"
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:"Abhishek"
            })
        }, 2000);
    }

  render() {
      console.log("#########Parent Component Render########")
    return (
      <div>Parent Component
          <RegComp name={this.state.name}/>
          <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp