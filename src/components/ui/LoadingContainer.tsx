import { ReactNode } from 'react'

import { ErrorAlert } from './ErrorAlert'
import { Center, Spinner } from '@chakra-ui/react'

interface LoadingContainerProps {
    children: ReactNode
    isLoading: boolean
    error?: any
}

export const LoadingContainer = ({ children, isLoading, error }: LoadingContainerProps) => {
    let content

    if (isLoading) {
        content = (
            <Center>
                <Spinner mt="8" size="lg" color="teal.200" />
            </Center>
        )
    } else if (error) {
        content = <ErrorAlert>Something went wrong!</ErrorAlert>
    } else {
        content = <>{children}</>
    }

    return <>{content}</>
}
