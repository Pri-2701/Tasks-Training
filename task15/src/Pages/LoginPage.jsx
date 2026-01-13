import { useAuth } from "../Context/AuthContext";
import { useState } from "react";

export default function LoginPage() {
    const { login } = useAuth();
    const [username, setUsername] = useState("");


return(
    <div className="app-container">
        <div className="auth-card fade-in">
            <h2>Global AuthContext</h2>
            <p>User Is Logged Out(No Session)</p>
            <input type="text" placeholder="enter username" value={username} onChange={(e) => setUsername(e.target.value)} className="input-field"/>
            <button className="auth-btn login-btn" onClick={() => login(username || "Priyanka")}>Login</button>
        </div>
    </div>
);
}


