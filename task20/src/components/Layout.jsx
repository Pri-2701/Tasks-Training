// src/components/Layout.jsx
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside style={{
        width: "200px",
        background: "#1e2a38",
        color: "white",
        padding: "1rem",
        display: "flex",
        flexDirection: "column"
      }}>
        <h2>Hospital</h2>
        <nav style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link>
          <Link to="/patients" style={{ color: "white", textDecoration: "none" }}>Patients</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "2rem", background: "#f0f4f8" }}>
        {children}
      </main>
    </div>
  );
}
