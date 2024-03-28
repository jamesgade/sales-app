import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FaUser, FaLock } from 'react-icons/fa'
import { auth } from '../firebase'
const Register = () => {

    const history = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        createUserWithEmailAndPassword(auth, email, password).then(data => {
            history('/')
            alert('signup successful!');
            console.log(data, "authdata");
        }
        ).catch(error => {
            alert(error.code)
        })
    }
    return (
        <section className='login'>
            <div className='wrapper'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <h1>Sign Up</h1>
                    <div className="input-box">
                        <input type="email" name='email' placeholder='Email' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" name="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <button type='submit' >Sign Up</button>

                </form>
            </div>
        </section>
    )

}

export default Register