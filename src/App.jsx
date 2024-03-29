import React from 'react'
import Login from './Components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import NotFound from './Components/NotFound'
import ForgotPassword from './Components/ForgotPassword'
import Register from './Components/Register'
import ProtectedRoute from './ProtectedRoute'
import { AuthContext } from './AuthContext'
const App = () => {
  return (
    <AuthContext>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/reset' element={<ForgotPassword />} />

        </Routes>
      </Router>
    </AuthContext >
  )
}

export default App