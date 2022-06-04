import React from "react";

// First way:- Destructuring in the parameter

// function Destructuring({myName, dogName, quality, food}) {
//   return (
// <div>
//     <hr/>
//     <h4>Hello! I am {myName}. I have a pet dog named {dogName}. It is very {quality}. It likes to eat {food}.</h4>
// </div>
//   )
// }
//export default Destructuring

// Second way:- Destructuring in the function body
function Destructuring(props) {
  const { myName, dogName, quality, food } = props;
  return (
    <div>
      <hr />
      <h4>
        Hello! I am {myName}. I have a pet dog named {dogName}. It is very{" "}
        {quality}. It likes to eat {food}.
      </h4>
    </div>
  );
}

export default Destructuring;
