import { Center, Heading } from '@chakra-ui/react'
import { PageLayout } from 'src/components/layout/Layout'
import { LoadingContainer } from 'src/components/ui/LoadingContainer'
import { useDogs } from 'src/hooks/useDogs'

export const Dogs = () => {
    const { data, isLoading, error } = useDogs()

    return (
        <PageLayout>
            <Center>
                <Heading mb={5}>Dogs</Heading>
            </Center>
            <LoadingContainer isLoading={isLoading} error={error}>
                <div style={{ textAlign: 'start', fontSize: '14px' }}>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            </LoadingContainer>
        </PageLayout>
    )
}
