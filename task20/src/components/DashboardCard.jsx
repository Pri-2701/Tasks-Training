export default function DashboardCard({ title, value }) {
  return (
    <div style={{
      flex: 1,
      padding: "1rem",
      margin: "0.5rem",
      background: "#f0f4f8",
      borderRadius: "8px",
      textAlign: "center"
    }}>
      <h4>{title}</h4>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}
