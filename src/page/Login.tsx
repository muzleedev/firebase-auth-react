import { FormEvent, useState } from 'react'
import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, useColorModeValue, Text, Heading, Center } from '@chakra-ui/react'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom'

import { PageLayout } from 'src/components/layout/Layout'
import { ErrorAlert } from 'src/components/ui/ErrorAlert.js'
import { firebaseAuth } from 'src/clients/firebase'
import { routes } from 'src/router/routes.js'
import { googleProvider } from 'src/auth/providers'
import { GoogleIcon } from 'src/components/icons/GoogleIcon'

export const Login = () => {
    const [isGoogleAuthenticating, setIsGoogleAuthenticating] = useState(false)
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isGoogleLoginError, setIsGoogleLoginError] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || routes.home

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setIsError(false)
            setIsAuthenticating(true)
            await signInWithEmailAndPassword(firebaseAuth, email, password)
            navigate(from)
        } catch (e) {
            console.error(e)
            setIsError(true)
        } finally {
            setIsAuthenticating(false)
        }
    }

    const handleGoogleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        try {
            setIsGoogleAuthenticating(true)
            await signInWithPopup(firebaseAuth, googleProvider)
            navigate(from)
        } catch (e) {
            console.error(e)
            setIsGoogleLoginError(true)
        } finally {
            setIsGoogleAuthenticating(false)
        }
    }

    return (
        <PageLayout>
            <Center>
                <Heading mb={5}>Login</Heading>
            </Center>
            <Flex align={'center'} justify={'center'}>
                <Box minW={{ base: '90%', md: '468px' }} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
                    <form onSubmit={(e) => handleLogin(e)}>
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
                                    Login
                                </Button>
                                <Button
                                    leftIcon={<GoogleIcon />}
                                    variant={'outline'}
                                    isLoading={isGoogleAuthenticating}
                                    onClick={(e) => handleGoogleLogin(e)}
                                >
                                    <Center>Sign in with Google</Center>
                                </Button>
                            </Stack>
                            {isError ? (
                                <ErrorAlert>
                                    <Text>Invalid credentials</Text>
                                </ErrorAlert>
                            ) : null}
                            {isGoogleLoginError ? (
                                <ErrorAlert>
                                    <Text>Could not log in with Google</Text>
                                </ErrorAlert>
                            ) : null}
                        </Stack>
                    </form>
                </Box>
            </Flex>
        </PageLayout>
    )
}
