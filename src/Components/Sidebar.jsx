import React from 'react'
import { BiHome, BiMessage, BiSolidReport, BiStats, BiTask, BiLogOut } from 'react-icons/bi'
import { FcSalesPerformance } from "react-icons/fc";
const Sidebar = () => {
    return (
        <div className='menu'>
            <div className="logo">
                <FcSalesPerformance className='logo-icon' />
                <h2>
                    Sales-App
                </h2>
            </div>
            <div className="menu-list">
                <a href="/dashboard" className='item'>
                    <BiHome className='icon' />
                    Dashboard
                </a>

                <a href="#" className='item'>
                    <BiLogOut className='icon' />
                    Logout
                </a>


            </div>
        </div>
    )
}

export default Sidebar