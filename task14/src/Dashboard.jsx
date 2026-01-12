import { Link, Outlet } from "react-router-dom"; //link  is used for  navigation without reloading the page
//outlet use  for render nested routes inside this components 



function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <nav>
        <Link to="">Home</Link> |{" "}
        <Link to="profile">Profile</Link> |{" "}
        <Link to="logout">Logout</Link>
      </nav>

      <hr />

      <Outlet /> {/* Nested pages render here */}
    </div>
  );
}

export default Dashboard;
