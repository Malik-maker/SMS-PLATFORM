import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../../services/authService';

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await authService.login(email, password);
            
            if (response.success) {
                // Store the bearer token in local storage
                localStorage.setItem('token', response.data.bearer.token);

                // Call onLogin from props to update authentication state
                onLogin(email, password);

                // alert('Login successful');
                console.log('Logged in user:', response.data);

                // Redirect based on successful login
                navigate('/admin-dashboard'); // Change to '/user-dashboard' if needed
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Login failed');
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",  }}>
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
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn" style={{ backgroundColor: "#15A57B", color: "white" }}>Login</button>
                    </div>
                </form>
                <div className="mt-3 text-center">
                    <small style={{ color: "#15A57B" }}>Not a member? <a href="/register" className="text-decoration-none" style={{ color: "#15A57B" }}>Register</a></small>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
