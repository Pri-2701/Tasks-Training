import { useState, useCallback } from "react";
import ReactMemoName from "./reactMemoName";

function App2() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []); // memoized function

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ReactMemoName name="Apple" onClick={handleClick} />
    </div>
  );
}

export default App2;