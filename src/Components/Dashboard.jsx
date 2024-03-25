import React from 'react'
import Sidebar from './Sidebar'
import './App.css'
import Content from './Content'
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="dashboard-content">
        <Content />
      </div>
    </div>
  )
}

export default Dashboard