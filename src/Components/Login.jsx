import React, { useState, useEffect } from 'react';
import '../index.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import ProtectedRoute from '../ProtectedRoute'; // Import ProtectedRoute

const Login = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('rememberedEmail');
        const storedPassword = localStorage.getItem('rememberedPassword');
        if (storedEmail && storedPassword) {
            setEmail(storedEmail);
            setPassword(storedPassword);
            setRememberMe(true);
        }
    }, []);

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                alert('Login successful!');
                history(`/dashboard`);
            })
            .catch((error) => {
                console.log(error);
                alert('Invalid username or password');
            });

        // Store credentials if "Remember Me" is checked
        if (rememberMe) {
            localStorage.setItem('rememberedEmail', email);
            localStorage.setItem('rememberedPassword', password);
        } else {
            // Clear stored credentials if "Remember Me" is unchecked
            localStorage.removeItem('rememberedEmail');
            localStorage.removeItem('rememberedPassword');
        }
    };
    const handleReset = () => {
        history(`/reset`);
    };
    const handleSignup = () => {
        history(`/signup`);
    };

    return (
        <section className='login'>
            <div className='wrapper'>
                <form onSubmit={signIn}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="email" placeholder='Email' value={email} required onChange={(e) => setEmail(e.target.value)} />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' value={password} required onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />Remember me</label>
                        <p onClick={handleReset}> Forgot Password?</p>
                    </div>

                    <button type='submit' >Login</button>
                    <div className="register-link">
                        <p onClick={handleSignup}>Don't have an account?  <b>Register</b></p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;

