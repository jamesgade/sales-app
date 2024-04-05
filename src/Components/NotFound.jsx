import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className='notfound'>
            <div className="notfound-wrapper">

                <h1>Oops</h1>
                <p>404 - Page not found !</p>
                <Link to='/'>
                    <FaHome /> Back To Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound