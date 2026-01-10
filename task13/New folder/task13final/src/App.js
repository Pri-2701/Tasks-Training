import React, { useState, useCallback } from "react";
import { useFetch } from "./useFetch";
import UserList from "./UserList";
import "./App.css";

function App() {
  const { data: users, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [clickedUser, setClickedUser] = useState("");

  // Memoize to prevent re-renders
  const handleClick = useCallback((name) => {
    setClickedUser(name);
  }, []);

  return (
    <div className="App">
      <h1>Custom Hook + Memo + useCallback Example</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <UserList users={users} handleClick={handleClick} />

      {clickedUser && <p>You clicked: {clickedUser}</p>}
    </div>
  );
}

export default App;


