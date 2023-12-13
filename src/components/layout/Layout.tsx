import { ReactNode } from 'react'
import { Container } from '@chakra-ui/react'

import { Navbar } from 'src/components/navigation/Navbar'

export const PageLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <Container maxW="container.xl" mt={{ base: 3, md: 5, lg: 7 }}>
                {children}
            </Container>
        </>
    )
}
