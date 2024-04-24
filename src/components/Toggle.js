import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const color = isOn ? "red" : "white";
  const handleClick = () => {
    setIsOn(() => !isOn);
  };
  return (
    <button style={{ backgroundColor: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
