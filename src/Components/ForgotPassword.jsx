import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
const ForgotPassword = () => {
    const history = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const emailVal = e.target.email.value;
        sendPasswordResetEmail(auth, emailVal).then(data => {
            alert("Check your email")
            history(`/`)
        }).catch(error => {
            alert(error.code)
        })
    }
    return (
        <section className="login">
            <div className='wrapper'>
                <h1>Forgot Password</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-box">

                        <input name='email' placeholder='Enter your email' /><br /><br />
                    </div>
                    <button>Reset</button>
                </form>
            </div></section>

    )
}

export default ForgotPassword