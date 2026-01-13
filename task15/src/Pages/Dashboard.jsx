import { useAuth } from "../Context/AuthContext";

export default function Dashboard() {
    const{ logout,user } = useAuth();


return(
    <div className="app-container">
        <div className="auth-card fade-in">
            <h2>Dashboard</h2>
            <p>Welcome! {user}</p>
            <button className="auth-btn logout-btn" onClick={logout}>Login</button>
        </div>
    </div>
);
}


