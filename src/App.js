// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import GetInTouch from "./pages/GetInTouch/GetInTouch";
import Documentation from "./pages/Documentation/Documentation";
import Email from "./pages/Email/Email";
import SMS from "./pages/SMS/SMS";
import OTP from "./pages/OTP/OTP";
import LoginPage from "./pages/Auth/LoginPage/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AdminDashboard from "./admin/AdminDashboard";
import authService from "./services/authService";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import DashboardHome from './admin/components/DashboardHome';
import Messenger from './admin/components/Messenger';
import Contact from './admin/components/Contact';
import TopUp from './admin/components/TopUp';
import Report from './admin/components/Report';
import SendQuickMessage from './admin/components/SendQuickMessage';

import Privacy from './admin/components/settings/Privacy';
import DashboardDocumentation from './admin/components/settings/Documentation';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Example functions for handling login and logout
  const handleLogin = async (email, password) => {
    try {
      const response = await authService.login(email, password);
      if (response.success) {
        // Store token or other necessary data
        localStorage.setItem("token", response.data.bearer.token);
        setIsAuthenticated(true);
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed");
    }
  };

  const handleLogout = () => {
    // Clear authentication state
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><NavBar /><HomePage /><Footer /></>} />
          <Route path="/GetInTouch" element={<><NavBar /><GetInTouch /><Footer /></>} />
          <Route path="/AboutUs" element={<><NavBar /><AboutUs /><Footer /></>} />
          <Route path="/Documentation" element={<><NavBar /><Documentation /><Footer /></>} />
          <Route path="/Email" element={<><NavBar /><Email /><Footer /></>} />
          <Route path="/SMS" element={<><NavBar /><SMS /><Footer /></>} />
          <Route path="/OTP" element={<><NavBar /><OTP /><Footer /></>} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Admin Dashboard Routes */}
          <Route path="/admin-dashboard/*" element={<AdminDashboard onLogout={handleLogout} />}>
            <Route index element={<DashboardHome />} />
            <Route path="messenger" element={<Messenger />} />
            <Route path="contact" element={<Contact />} />
            <Route path="topup" element={<TopUp />} />
            <Route path="report" element={<Report />} />
            <Route path="SendQuickMessage" element={<SendQuickMessage />} />   
            <Route path="settings/privacy" element={<Privacy />} />
            <Route path="settings/documentation" element={<DashboardDocumentation />} />
          </Route>

          {/* Redirect to home if route is not found */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
