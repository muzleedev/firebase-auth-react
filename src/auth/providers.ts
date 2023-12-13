import { GoogleAuthProvider } from 'firebase/auth'

export const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: 'select_account ',
})
