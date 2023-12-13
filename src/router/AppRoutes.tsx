import { Navigate, Route, Routes } from 'react-router-dom'

import { Home } from 'src/page/Home'
import { Login } from 'src/page/Login'
import { routes } from 'src/router/routes'
import { Profile } from 'src/page/Profile'
import { Signup } from 'src/page/Signup'
import { useAuth } from 'src/hooks/auth'
import { LoadingContainer } from 'src/components/ui/LoadingContainer'
import { ProtectedRoute } from 'src/components/auth/ProtectedRoute'
import { RestrictedRoute } from 'src/components/auth/RestrictedRoute'
import { Dogs } from 'src/page/Dogs'

export const AppRoutes = () => {
    const { isLoading } = useAuth()

    return (
        <LoadingContainer isLoading={isLoading}>
            <Routes>
                {/* Public routes */}
                <Route path={routes.home} element={<Home />} />

                {/* Restricted routes */}
                <Route element={<RestrictedRoute />}>
                    <Route path={routes.login} element={<Login />} />
                    <Route path={routes.signup} element={<Signup />} />
                </Route>

                {/* Protected routes */}
                <Route element={<ProtectedRoute />}>
                    <Route path={routes.profile} element={<Profile />} />
                    <Route path={routes.dogs} element={<Dogs />} />
                </Route>

                <Route path="*" element={<Navigate to={routes.home} />} />
            </Routes>
        </LoadingContainer>
    )
}
