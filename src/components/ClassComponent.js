// If we use class component we shall have to import 'Component' also with 'React'.
// Like this 

import React, { Component } from "react";

class Welcome extends Component {
    render(){
        return <h1>Class Component</h1>
    }
}

export default Welcome;