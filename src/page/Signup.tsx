import { FormEvent, useState } from 'react'
import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, useColorModeValue, Text, Center, Heading } from '@chakra-ui/react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { PageLayout } from 'src/components/layout/Layout.js'
import { ErrorAlert } from 'src/components/ui/ErrorAlert.js'
import { firebaseAuth } from 'src/clients/firebase.js'
import { routes } from 'src/router/routes.js'

export const Signup = () => {
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const [isError, setIsError] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setIsError(false)
            setIsAuthenticating(true)
            // the signup method logs in the user immediately
            await createUserWithEmailAndPassword(firebaseAuth, email, password)
            navigate(routes.home)
        } catch (e) {
            console.error(e)
            setIsError(true)
        } finally {
            setIsAuthenticating(false)
        }
    }

    return (
        <PageLayout>
            <Center>
                <Heading mb={5}>Signup</Heading>
            </Center>
            <Flex align={'center'} justify={'center'}>
                <Box minW={{ base: '90%', md: '468px' }} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" onChange={(e) => setPassword(e.target.value)} />
                            </FormControl>
                            <Stack spacing={10}>
                                <Button isLoading={isAuthenticating} colorScheme="blue" type="submit">
                                    Signup
                                </Button>
                            </Stack>
                            {isError ? (
                                <ErrorAlert>
                                    <Text>Invalid data</Text>
                                </ErrorAlert>
                            ) : null}
                        </Stack>
                    </form>
                </Box>
            </Flex>
        </PageLayout>
    )
}
