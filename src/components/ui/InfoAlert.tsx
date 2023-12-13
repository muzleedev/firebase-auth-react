import { Alert, AlertIcon } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const InfoAlert = ({ children }: { children: ReactNode }) => {
    return (
        <Alert status="info">
            <AlertIcon />
            {children}
        </Alert>
    )
}
