import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    alert("Login success");
    setIsAuth(true);        
    navigate("/dashboard");  
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
