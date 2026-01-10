import React from "react";

const Item = React.memo(({ name }) => {
  console.log("Rendering:", name);
  return <li>{name}</li>;
});

export default Item;
