import { Box, Flex, HStack, IconButton, useDisclosure, useColorModeValue, Stack, Button, Image } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

import { Logout } from 'src/components/auth/Logout'
import { routes } from 'src/router/routes'
import { useAuth } from 'src/hooks/auth'
import { firebaseIcon } from 'src/config/constants'

export const Navbar = () => {
    const { user } = useAuth()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={{ base: 2, md: 8, lg: 12 }}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Box>
                        <Link to={routes.home}>
                            <Image boxSize="10" src={firebaseIcon} />
                        </Link>
                    </Box>
                    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                        <Link to={routes.profile}>Profile</Link>
                        <Link to={routes.dogs}>Dogs</Link>
                    </HStack>
                </HStack>
                {user ? (
                    <HStack spacing={8} alignItems={'center'}>
                        <Logout />
                    </HStack>
                ) : (
                    <HStack spacing={8} alignItems={'center'}>
                        <Link to={routes.login}>
                            <Button>Login</Button>
                        </Link>
                        <Link to={routes.signup}>
                            <Button>Signup</Button>
                        </Link>
                    </HStack>
                )}
            </Flex>

            {isOpen && (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        <Link to={routes.home}>Home</Link>
                        <Link to={routes.profile}>Profile</Link>
                        <Link to={routes.dogs}>Dogs</Link>
                    </Stack>
                </Box>
            )}
        </Box>
    )
}
