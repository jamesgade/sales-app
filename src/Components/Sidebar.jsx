import React from 'react'
import { BiHome, BiMessage, BiSolidReport, BiStats, BiTask } from 'react-icons/bi'
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
                <a href="#" className='item'>
                    <BiHome className='icon' />
                    Dashboard
                </a>

                <a href="#" className='item'>
                    <BiSolidReport className='icon' />
                    Report
                </a>
                <a href="#" className='item'>
                    <BiStats className='icon' />
                    Stats
                </a>

            </div>
        </div>
    )
}

export default Sidebar