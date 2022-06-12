// React Hooks Tutorial-11-useEffect with incorrect dependency

import React, { useEffect, useState } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return <div><h1>{count}</h1></div>;
}

export default IntervalHookCounter;
