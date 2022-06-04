import React, { Component } from 'react'

class Howdy extends Component {
  render() {
    return (
      <div>
        {/* In class based component props are used like this  */}
          <h2>Howdy {this.props.name}!</h2>
      </div>
    )
  }
}

export default Howdy