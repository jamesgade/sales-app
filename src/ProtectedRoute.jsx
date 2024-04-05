import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from './Components/useAuthStatus'
import Spinner from './Components/Spinner'

const ProtectedRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus()

    if (checkingStatus) {
        return <Spinner />
    }

    return loggedIn ? <Outlet /> : <Navigate to='/' replace />
}

export default ProtectedRoute