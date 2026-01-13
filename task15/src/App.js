import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";

export default function App() {
  const { isAuth } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route 
          path="/" 
          element={!isAuth ? <LoginPage /> : <Navigate to="/dashboard" />} 
        />
        
        {/* Dashboard page */}
        <Route 
          path="/dashboard" 
          element={isAuth ? <Dashboard /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}


