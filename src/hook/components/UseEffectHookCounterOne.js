import React, { useEffect, useState } from "react";

function UseEffectHookCounterOne() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // For conditionally executing a useeffect, we have to pass another argument that is an array.
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log("UseEffect")
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => {
                setName(e.target.value);
            }} />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default UseEffectHookCounterOne;
