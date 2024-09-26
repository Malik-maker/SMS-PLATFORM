import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../../services/authService';

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);  // Step 1: Add loading state
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);  // Start loading when the login starts

        try {
            const response = await authService.login(email, password);
            console.log(response); // Check the structure of the response
        
            if (response.success) {
                // Extract the needed data from the response
                const { _id, name, phone, email } = response.data;
                
                // Store user data in localStorage
                localStorage.setItem('token', response.data.bearer.token);         // Store token
                localStorage.setItem('userID', _id);             // Store user ID
                localStorage.setItem('userName', name);          // Store user name
                localStorage.setItem('userPhone', phone);        // Store user phone
                localStorage.setItem('userEmail', email);        // Store user email
        
                // Redirect or handle successful login
                navigate('/admin-dashboard');
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Login failed');
        } finally {
            setLoading(false);
        }
        
    };

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "600px" }}>
                <h2 className="text-center mb-4" style={{ color: "#15A57B" }}>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" style={{ color: "#15A57B" }}>Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter your email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            disabled={loading}  // Disable input during loading
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" style={{ color: "#15A57B" }}>Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Enter your password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            disabled={loading}  // Disable input during loading
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn" style={{ backgroundColor: "#15A57B", color: "white" }} disabled={loading}>
                            {loading ? "Logging in..." : "Login"}  {/* Change button text based on loading state */}
                        </button>
                    </div>
                </form>
                <div className="mt-3 text-center">
                    <small style={{ color: "#15A57B" }}>Not a member? <a href="/register" className="text-decoration-none" style={{ color: "#15A57B" }}>Register</a></small>
                </div>
                {/* Step 3: Show loading spinner */}
                {loading && (
                    <div className="text-center mt-3">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginPage;
