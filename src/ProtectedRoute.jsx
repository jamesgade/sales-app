import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        // You can render a loading spinner or message while checking authentication status
        return <div>Loading...</div>;
    }

    return (
        <Route
            {...rest}
            element={user ? <Component {...rest} /> : <Navigate to="/login" />}
        />
    );
};

export default ProtectedRoute;
