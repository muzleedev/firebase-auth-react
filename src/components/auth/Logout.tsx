import { Button } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { firebaseAuth } from 'src/clients/firebase'
import { routes } from 'src/router/routes'

export const Logout = () => {
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await signOut(firebaseAuth)
            navigate(routes.home)
        } catch (e) {
            console.error(e)
        }
    }

    return <Button onClick={() => handleLogout()}>Logout</Button>
}
