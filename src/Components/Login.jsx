import React, { useState } from 'react'
import '../index.css'
import { FaUser, FaLock } from 'react-icons/fa'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    // const dummyUserData = {
    //     username: 'user123',
    //     password: 'password123',
    // };

    // const handleLogin = () => {
    //     if (username === dummyUserData.username && password === dummyUserData.password) {
    //         alert('Login successful!');
    //     } else {
    //         setError('Invalid username or password');
    //     }
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                alert('Login successful!');
            }).catch((error) => {
                console.log(error)
                alert('Invalid username or password');
            })
    }

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
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#"> Forget Password?</a>
                    </div>
                    {/* {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>} */}
                    <button type='submit' >Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>

                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login