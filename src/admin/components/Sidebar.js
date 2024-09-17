import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css"; // Import the CSS file

const Sidebar = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div id="page-top">
      <div id="wrapper">
        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="sidebar-toggler" onClick={toggleSidebar}>
            <i className="fa fa-bars"></i>
          </div>
          <ul className="sidebar-nav" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link
              className="sidebar-brand d-flex align-items-center justify-content-center"
              to="/admin-dashboard"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
              </div>
              <div className="sidebar-brand-text mx-3">TRENCH MESSAGING</div>
            </Link>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
              <Link className="nav-link" to="/admin-dashboard">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            {/* Nav Item - Messenger */}
            <li className="nav-item">
              <Link className="nav-link" to="/admin-dashboard/messenger">
                <i className="fas fa-fw fa-envelope"></i>
                <span>Messenger</span>
              </Link>
            </li>
            {/* Nav Item - Contact */}
            <li className="nav-item">
              <Link className="nav-link" to="/admin-dashboard/contact">
                <i className="fas fa-fw fa-address-book"></i>
                <span>Contact</span>
              </Link>
            </li>
            {/* Nav Item - Top Up */}
            <li className="nav-item">
              <Link className="nav-link" to="/admin-dashboard/topup">
                <i className="fas fa-fw fa-plus-circle"></i>
                <span>Top Up</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin-dashboard/api">
                <i className="fas fa-fw fa-cogs"></i>
                <span>API</span>
              </Link>
            </li>
            {/* Nav Item - Report */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/admin-dashboard/report">
                <i className="fas fa-fw fa-chart-line"></i>
                <span>Report</span>
              </Link>
            </li> */}
            {/* Nav Item - Settings */}
            {/* <li className={`nav-item dropdown ${dropdownOpen ? "show" : ""}`}>
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                onClick={toggleDropdown}
                role="button"
                aria-expanded={dropdownOpen}
              >
                <i className="fas fa-fw fa-cogs"></i>
                <span>Settings</span>
              </Link>
              <div
                className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                aria-labelledby="settingsDropdown"
              >
                <Link className="dropdown-item" to="/admin-dashboard/settings/privacy">
                  Privacy
                </Link>
                <Link className="dropdown-item" to="/admin-dashboard/settings/documentation">
                  Documentation
                </Link>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
