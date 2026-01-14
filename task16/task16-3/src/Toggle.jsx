import { useState } from "react";

function Toggle({ children }) {
  const [isOn, setIsOn] = useState(false);

  // function to toggle state
  const toggle = () => {
    setIsOn(prev => !prev);
  };

  // children is a function (render prop)
  return children({ isOn, toggle });
}

export default Toggle;
