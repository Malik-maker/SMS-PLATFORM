import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import authService from '../../services/authService';


const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await authService.register(name, email, phone, password);
            alert('Registration successful');
            console.log(response);
            navigate('/login');

        } catch (error) {
            if (error.response && error.response.status === 400) {
                // Assuming 409 Conflict is returned when email or phone is already in use
                alert('The email or phone number is already in use.');
            } 
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",  }}>
            <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "600px" }}>
                <h2 className="text-center mb-4" style={{ color: "#15A57B" }}>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label" style={{ color: "#15A57B" }}>Full Name/Business Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            placeholder="Enter your name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
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
                        <label htmlFor="phone" className="form-label" style={{ color: "#15A57B" }}>Phone</label>
                        <input 
                            type="tel" 
                            className="form-control" 
                            id="phone" 
                            placeholder="Enter your phone number" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
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
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label" style={{ color: "#15A57B" }}>Confirm Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="confirmPassword" 
                            placeholder="Confirm your password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="terms" />
                        <label className="form-check-label" htmlFor="terms" style={{ color: "#15A57B" }}>I agree to the <a href="#" style={{ color: "#15A57B" }}>Terms of Service</a> and <a href="#" style={{ color: "#15A57B" }}>Privacy Policy</a></label>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn" style={{ backgroundColor: "#15A57B", color: "white" }}>Register</button>
                    </div>
                </form>
                <div className="mt-3 text-center">
                    <small style={{ color: "#15A57B" }}>Already a member? <a href="/login" className="text-decoration-none" style={{ color: "#15A57B" }}>Login</a></small>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;


















// // src/pages/RegisterPage.js
// import React, { useState } from 'react';
// import authService from '../../services/authService';

// const RegisterPage = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleRegister = () => {
//         authService.register(username, password, 'user');
//         alert('Registration successful');
//     };

//     return (

//         <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", backgroundColor: "#15A57B" }}>
//         <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "600px" }}>
//             <div className="text-center mb-4">
//                 {/* <img src={logo} alt="Logo" style={{ width: '100px' }} /> */}
//             </div>
//             <h2 className="text-center mb-4" style={{ color: "#15A57B" }}>Register</h2>
//             <form className=''>
//                 <div className="mb-3">
//                     <label htmlFor="name" className="form-label" style={{ color: "#15A57B" }}>Full Name/Business Name</label>
//                     <input type="text" className="form-control" id="name" placeholder="Enter your name" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label" style={{ color: "#15A57B" }}>Email address</label>
//                     <input type="email" className="form-control" id="email" placeholder="Enter your email" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="phone" className="form-label" style={{ color: "#15A57B" }}>Phone</label>
//                     <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label" style={{ color: "#15A57B" }}>Password</label>
//                     <input type="password" className="form-control" id="password" placeholder="Enter your password" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="confirmPassword" className="form-label" style={{ color: "#15A57B" }}>Confirm Password</label>
//                     <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" />
//                 </div>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="terms" />
//                     <label className="form-check-label" htmlFor="terms" style={{ color: "#15A57B" }}>I agree to the <a href="#" style={{ color: "#15A57B" }}>Terms of Service</a> and <a href="#" style={{ color: "#15A57B" }}>Privacy Policy</a></label>
//                 </div>
//                 <div className="d-grid">
//                     <button type="submit" className="btn" style={{ backgroundColor: "#15A57B", color: "white" }}>Register</button>
//                 </div>
//             </form>
//             <div className="mt-3 text-center">
//                 <small style={{ color: "#15A57B" }}>Already a member? <a href="#" className="text-decoration-none" style={{ color: "#15A57B" }}>Login</a></small>
//             </div>
//         </div>
//     </div>

    
//     );
// }

// export default RegisterPage;
//     // <div>
//         //     <h1>Register</h1>
//         //     <input
//         //         type="text"
//         //         placeholder="Username"
//         //         value={username}
//         //         onChange={(e) => setUsername(e.target.value)}
//         //     />
//         //     <input
//         //         type="password"
//         //         placeholder="Password"
//         //         value={password}
//         //         onChange={(e) => setPassword(e.target.value)}
//         //     />
//         //     <button onClick={handleRegister}>Register</button>
//         // </div>