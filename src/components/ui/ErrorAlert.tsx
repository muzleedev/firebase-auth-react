import { Alert, AlertIcon } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const ErrorAlert = ({ children }: { children: ReactNode }) => {
    return (
        <Alert status="error">
            <AlertIcon />
            {children}
        </Alert>
    )
}
