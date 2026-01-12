import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Profile from "./Profile";
import Logout from "./Logout";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false); // ✅ AUTH STATE

  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route path="/" element={<Login setIsAuth={setIsAuth} />} />

        {/* Protected Dashboard with Nested Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuth={isAuth}>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="logout"
            element={<Logout setIsAuth={setIsAuth} />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
