import { Typography } from "@mui/material";
import "./App.css";
import DashboardLayoutNavigationLinks from "./components/dashboard/Dashboard";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login } from "./components/login/Login";
import { users } from "./utils/dataLogin";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = (username: string, password: string) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <DashboardLayoutNavigationLinks pathname="/home">
               
              </DashboardLayoutNavigationLinks>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
