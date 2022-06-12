import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log(`Mouse event called`);
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log(`useEffect called`);
    window.addEventListener("mousemove", logMousePosition);

    // Cleaning up eventlistener after unmounting the component
    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
