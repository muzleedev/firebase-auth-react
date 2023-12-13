import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Spinner } from 'src/components/ui/Spinner'
import { useAuth } from 'src/hooks/auth'
import { routes } from 'src/router/routes'

export const ProtectedRoute = () => {
    const { user, isLoading } = useAuth()
    const location = useLocation()

    // TODO make this smoother for better UX
    if (isLoading) {
        return <Spinner />
    }

    return user ? <Outlet /> : <Navigate to={routes.login} state={{ from: location }} replace />
}
