import React from 'react'
import { BiHome, BiLogOut, BiCaretRightSquare, BiSolidFace, BiSolidPlusCircle, BiSolidUserPlus, BiBarChartAlt } from 'react-icons/bi'
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
                <a href="/dashboard" className='item'>
                    <BiSolidPlusCircle className='icon' />
                    Add Sales
                </a>
                <a href="/dashboard" className='item'>
                    <BiSolidPlusCircle className='icon' />
                    Add Production
                </a>
                <a href="/dashboard" className='item'>
                    < BiSolidUserPlus className='icon' />
                    Add Customer
                </a>
                <a href="/dashboard" className='item'>
                    <BiBarChartAlt className='icon' />
                    Sales
                </a>
                <a href="/dashboard" className='item'>
                    <BiCaretRightSquare className='icon' />
                    Production
                </a>
                <a href="/dashboard" className='item'>
                    <BiSolidFace className='icon' />
                    Customers
                </a>
                <a href="/dashboard" className='item'>
                    <BiSolidPlusCircle className='icon' />
                    Add Stock
                </a>
                <a href="/dashboard" className='item'>
                    <BiCaretRightSquare className='icon' />
                    View Stock
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