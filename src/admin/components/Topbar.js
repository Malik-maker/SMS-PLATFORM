import React, { useState } from 'react';
import './AdminDashboard.css'; // Import the CSS file

const Topbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleLogout = () => {
        // Clear authentication state
        localStorage.removeItem('token');
        window.location.href = '/login'; // Redirect to login page
    };

    return (
        <div>
            {/* Topbar */}
            <nav className="topbar-nav navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
                <button
                    id="sidebarToggleTop"
                    className="btn btn-link d-md-none rounded-circle mr-3"
                    onClick={toggleSidebar}
                >
                    <i className="fa fa-bars"></i>
                </button>
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                    {/* Nav Item - User Information */}
                    <li className="nav-item dropdown no-arrow">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="userDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <span className="mr-2 d-lg-inline text-dark small">Admin</span>
                            <i className="fas fa-user-circle fa-2x text-dark"></i>
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown"
                        >
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profile
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Settings
                            </a>
                            <div className="dropdown-divider"></div>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLogout(); // Directly handle logout
                                }}
                            >
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Topbar;
