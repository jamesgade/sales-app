import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from './AuthContext'

export default function ProtectedRoute({ children }) {
    const { user } = useContext(Context)
    if (!user) {
        return <Navigate to='/' replace />
    }
    else {
        return children;
    }
}
