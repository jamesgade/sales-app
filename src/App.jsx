import React from 'react'
import Login from './Components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import NotFound from './Components/NotFound'
import ForgotPassword from './Components/ForgotPassword'
import ProtectedRoute from './ProtectedRoute'

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/reset' element={<ForgotPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>

  )
}

export default App