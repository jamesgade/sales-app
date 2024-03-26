import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const ContentHeader = () => {
    return (
        <div className='content-header'>
            <h1 className="header-title">
                Dashboard
            </h1>
            <Link to='/'>Add Sales</Link>
            <div className="header-activity">
                <div className="search-box">
                    <input type="text" placeholder='Search Here' />
                    <BiSearch className='icon' />
                </div>
            </div>
        </div>
    )
}

export default ContentHeader