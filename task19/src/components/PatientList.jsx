import React, { useMemo } from "react";
import PatientRow from "./PatientRow";
import "./Patient.css";

function PatientList({ patients }) {
  // SAFE: patients always object
  const patientArray = useMemo(() => {
    return Object.values(patients ?? {});
  }, [patients]);

  return (
    <div>
      {patientArray.map((p) => (
        <PatientRow key={p.id} patient={p} />
      ))}
    </div>
  );
}

export default PatientList;




