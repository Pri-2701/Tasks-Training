import { useEffect, useState } from "react";
import { fetchPatients, addPatient, editPatient, deletePatient } from "../api/patientApi";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Layout from "../components/Layout";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newPatient, setNewPatient] = useState({ name: "", age: "", disease: "" });
  const [editId, setEditId] = useState(null);

  const loadPatients = () => {
    setLoading(true);
    fetchPatients()
      .then(res => { setPatients(res); setError(""); })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadPatients();
  }, []);

  const handleAdd = () => {
    if (!newPatient.name || !newPatient.age || !newPatient.disease) return;
    addPatient(newPatient).then(() => {
      setNewPatient({ name: "", age: "", disease: "" });
      loadPatients();
    });
  };

  const handleEdit = () => {
    editPatient(editId, newPatient).then(() => {
      setEditId(null);
      setNewPatient({ name: "", age: "", disease: "" });
      loadPatients();
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this patient?")) {
      deletePatient(id).then(loadPatients);
    }
  };

  return (
    <Layout>
      <h1>Patients</h1>

      {loading && <Loading />}
      {error && <Error message={error} />}

      {!loading && !error && (
        <>
          <div style={{ marginBottom: "1rem" }}>
            <input placeholder="Name" value={newPatient.name} onChange={e => setNewPatient({ ...newPatient, name: e.target.value })} />
            <input placeholder="Age" value={newPatient.age} onChange={e => setNewPatient({ ...newPatient, age: e.target.value })} />
            <input placeholder="Disease" value={newPatient.disease} onChange={e => setNewPatient({ ...newPatient, disease: e.target.value })} />
            {editId ? (
              <button onClick={handleEdit}>Save</button>
            ) : (
              <button onClick={handleAdd}>Add</button>
            )}
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Disease</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map(p => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.age}</td>
                  <td>{p.disease}</td>
                  <td>
                    <button onClick={() => { setEditId(p.id); setNewPatient({ name: p.name, age: p.age, disease: p.disease }); }}>Edit</button>
                    <button onClick={() => handleDelete(p.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </Layout>
  );
}
