import React from 'react'
import { BiHome, BiLogOut } from 'react-icons/bi'
import { FcSalesPerformance } from "react-icons/fc";
import { auth } from '../firebase'
import { signOut } from 'firebase/auth';
const Sidebar = () => {
    const logOut = () => {
        signOut(auth).then(() => {
            alert('Successfully Logout !')
        }).catch(error => console.log(error)
        )
    }
    return (
        <div className='menu'>
            <div className="logo">
                <FcSalesPerformance className='logo-icon' />
                <h2 style={{ fontSize: '22px' }}>
                    Sales-App
                </h2>
            </div>
            <div className="menu-list">
                <a href="/dashboard" className='item'>
                    <BiHome className='icon' />
                    Dashboard
                </a>

                <a href="/" className='item' onClick={logOut}>
                    <BiLogOut className='icon' />
                    Logout
                </a>


            </div>
        </div>
    )
}

export default Sidebar