import DashboardCard from "../components/DashboardCard";
import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <DashboardCard title="Total Patients" value={120} />
        <DashboardCard title="Appointments" value={35} />
        <DashboardCard title="Doctors On Duty" value={8} />
      </div>
    </Layout>
  );
}

