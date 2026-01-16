import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../Services/PatientServices";
import "./Patient.css";

const PatientList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
  });

  if (isLoading) return <p>Loading patients...</p>;
  if (error) return <p>Error loading patients</p>;

  return (
    <div className="container">
      <h2>🏥 Patient List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;

