import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button Clicked')
    }
  return (
    <div>

        {/* If we use paranthesis like this, it will become a function call and we don't want that. */}
        {/* So instead of doing this */}
        {/* <button onClick={clickHandler()}>Click</button> */}

        {/* Do this  */}
        <button onClick={clickHandler}>Click</button>


    </div>
  )
}

export default FunctionClick