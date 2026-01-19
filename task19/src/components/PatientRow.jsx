import React from "react";

const PatientRow = React.memo(({ name, style }) => {
  return (
    <div style={style}>
      {name}
    </div>
  );
});

export default PatientRow;
