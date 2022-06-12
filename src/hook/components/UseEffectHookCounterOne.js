import React, { useEffect, useState } from "react";

function UseEffectHookCounterOne() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log("UseEffect")
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default UseEffectHookCounterOne;
