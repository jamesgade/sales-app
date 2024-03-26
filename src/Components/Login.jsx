import React, { useState } from 'react'
import '../index.css'
import { FaUser, FaLock } from 'react-icons/fa'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dummyUserData = {
        username: 'user123',
        password: 'password123',
    };

    const handleLogin = () => {
        if (username === dummyUserData.username && password === dummyUserData.password) {
            alert('Login successful!');
        } else {
            setError('Invalid username or password');
        }
    };
    return (
        <section className='login'>
            <div className='wrapper'>
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#"> Forget Password?</a>
                    </div>
                    {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
                    <button type='submit' onClick={handleLogin}>Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>

                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login