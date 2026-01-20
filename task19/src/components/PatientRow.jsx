import React from "react";
import "./Patient.css";


function PatientRow({ patient }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}>
      <strong>{patient.name}</strong> - Age: {patient.age}
    </div>
  );
}

export default PatientRow;
