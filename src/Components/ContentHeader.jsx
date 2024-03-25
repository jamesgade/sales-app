import React from 'react'
import { BiSearch } from 'react-icons/bi'
const ContentHeader = () => {
    return (
        <div className='content-header'>
            <h1 className="header-title">
                Dashboard
            </h1>
            <a href='#'>Add Sales</a>
            <div className="header-activity">
                <div className="search-box">
                    <input type="text" placeholder='Search' />
                    <BiSearch className='icon' />
                </div>
            </div>
        </div>
    )
}

export default ContentHeader