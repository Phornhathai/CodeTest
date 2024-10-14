import "./App.css";

import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login } from "./components/login/Login";
import { users } from "./utils/dataLogin";
import { DashboardLayoutNavigationLinks } from "./components/dashboard/Dashboard";
import { Home } from "./components/home/Home";
import { Profile } from "./components/profile/Profile";

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
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/home/*"
          element={
            isAuthenticated ? (
              <DashboardLayoutNavigationLinks pathname="/home">
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </DashboardLayoutNavigationLinks>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
