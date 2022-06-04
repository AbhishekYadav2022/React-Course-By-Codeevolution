import React from "react";

function Hi(props) {
  return (
    <div>
      <h2>
        Hi {props.name} a.k.a {props.heroName}
      </h2>
      {props.children}

      {/* This will tell us that props is an object  */}
      {/* {console.log(props)} */}
    </div>
  );
}

export default Hi;
