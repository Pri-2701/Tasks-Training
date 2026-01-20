import React, { useState } from "react";
import { patients as patientsData } from "../data/patients";
import PatientList from "../components/PatientList";
import "./Patients.css";

function Patients() {
  // IMPORTANT: default is {} (not undefined)
  const [patients] = useState(patientsData);

  return (
    <div>
      <h2>Patients</h2>
      <PatientList patients={patients} />
    </div>
  );
}

export default Patients;
