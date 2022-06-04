import React from 'react'

function ListRendering() {
    const names = ['Bruce', 'Clark', 'Diana']

    {/* Using List Rendering Logic */}
    const nameList = names.map(name => <h2>{name}</h2>)

  return (
    <div>
        {/* Simple approach */}
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[1]}</h2> */}

        {/* Using Javascript Map Method */}
        {/* {names.map(name => <h2>{name}</h2>)} */}

        {/* Using List Rendering Logic */}
        <div>{nameList}</div>
    </div>
  )
}

export default ListRendering