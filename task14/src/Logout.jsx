import { useNavigate } from "react-router-dom";

function Logout({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth")
    setIsAuth(false);                  
    navigate("/");                     
  };

  return (
    <div className="container">

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
