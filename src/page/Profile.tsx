import { Heading } from '@chakra-ui/react'

import { PageLayout } from 'src/components/layout/Layout'
import { useAuth } from 'src/hooks/auth'

export const Profile = () => {
    const { user } = useAuth()

    return (
        <PageLayout>
            <Heading mb={5}>Profile</Heading>
            <div style={{ textAlign: 'start', fontSize: '12px' }}>
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </div>
        </PageLayout>
    )
}
