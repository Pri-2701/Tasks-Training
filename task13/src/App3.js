import { useEffect, useState } from "react";  //infinite loop useEffecty


function App3() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setCount(count + 1);
  // }, [count]); // ❌ count changes → effect runs again → infinite loop 

  // useEffect(() => {
  //   setCount(1);
  // }, []); // //empty dependecny ->runs once

  // useEffect(() => {
  //   if(count < 10)
  //   setCount(count + 1);
  // }, [count]); // controlled Loop  stop at 5 
 
  useEffect(() => {
    setCount(prevcount => prevcount + 5);
  }, []); //count ++prevcount value





  return <h1>{count}</h1>;
}

export default App3;