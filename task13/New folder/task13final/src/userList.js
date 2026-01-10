import React from "react";

// React.memo prevents unnecessary re-renders
const UserList = React.memo(({ users, handleClick }) => {
  console.log("UserList rendered");

  if (!users.length) return <p>No users found</p>;

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: "8px" }}>
          {user.name}{" "}
          <button onClick={() => handleClick(user.name)}>
            Click
          </button>
        </div>
      ))}
    </div>
  );
});

export default UserList;

