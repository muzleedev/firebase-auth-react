import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAuth } from 'src/hooks/auth'
import { routes } from 'src/router/routes'

export const RestrictedRoute = () => {
    const { user } = useAuth()
    const location = useLocation()

    return user ? <Navigate to={routes.home} state={{ from: location }} replace /> : <Outlet />
}
