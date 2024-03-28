import React from 'react'
import Login from './Components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import NotFound from './Components/NotFound'
import ForgotPassword from './Components/ForgotPassword'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/reset' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App