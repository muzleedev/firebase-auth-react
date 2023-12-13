import { useAuthState } from 'react-firebase-hooks/auth'

import { firebaseAuth } from 'src/clients/firebase'

export const useAuth = () => {
    const [user, isLoading, error] = useAuthState(firebaseAuth)

    return { user, isLoading, error }
}
