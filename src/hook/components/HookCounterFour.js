import React, { useState } from 'react'

function HookCounterFour() {

    const[items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
    <div>
        <ul>
            {items.map(item => (
                <li key={item.id}> {item.value} </li>
            ))}
        <button onClick={addItem}>Add a number</button>
        </ul>
    </div>
  )
}

export default HookCounterFour