import { Center, Heading } from '@chakra-ui/react'

import { PageLayout } from 'src/components/layout/Layout'

export const Home = () => {
    return (
        <PageLayout>
            <Center>
                <Heading mb={5}>Home</Heading>
            </Center>
        </PageLayout>
    )
}
