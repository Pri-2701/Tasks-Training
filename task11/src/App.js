import { useState } from "react";
import "./App.css";

const patients = [
  { id: 1, name: "John Doe", age: 30, disease: "Flu", status: "Admitted" },
  { id: 2, name: "Jane Smith", age: 35, disease: "Fever", status: "Discharged" },
  { id: 3, name: "Mark Lee", age: 40, disease: "Dengue", status: "Admitted" }
];

const doctors = [
  { id: 1, name: "Dr. Ronald", dept: "Cardiology", status: "Available" },
  { id: 2, name: "Dr. Alice", dept: "Neurology", status: "Busy" },
  { id: 3, name: "Dr. Smith", dept: "Orthopedic", status: "Available" }
];

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">🏥 Hospital</h2>
        <ul>
          <li className={page === "dashboard" ? "active" : ""} onClick={() => setPage("dashboard")}>Dashboard</li>
          <li className={page === "patients" ? "active" : ""} onClick={() => setPage("patients")}>Patients</li>
          <li className={page === "doctors" ? "active" : ""} onClick={() => setPage("doctors")}>Doctors</li>
        </ul>
      </aside>

      {/* Main */}
      <div className="main">
        {/* Top Bar */}
        <header className="header">
          <h1>Hospital Management System</h1>
          <div className="profile">Admin 👤</div>
        </header>

        <section className="content">
          {page === "dashboard" && <Dashboard />}
          {page === "patients" && <Patients />}
          {page === "doctors" && <Doctors />}
        </section>
      </div>
    </div>
  );
}

/* Pages */

function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <div className="stats">
        <StatCard title="Doctors" value="22" />
        <StatCard title="Patients" value="120" />
        <StatCard title="Beds" value="75" />
        <StatCard title="Appointments" value="40" />
      </div>
    </>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <h3>{value}</h3>
    </div>
  );
}

function Patients() {
  return (
    <>
      <h2>Patients</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>Disease</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.disease}</td>
              <td className={p.status === "Admitted" ? "green" : "gray"}>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function Doctors() {
  return (
    <>
      <h2>Doctors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Department</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(d => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.dept}</td>
              <td className={d.status === "Available" ? "green" : "red"}>{d.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
