import { Spinner as ChakraSpinner, Center } from '@chakra-ui/react'

export const Spinner = ({ size = 'xl' }) => {
    return (
        <Center>
            <ChakraSpinner size={size} color="teal.200" />
        </Center>
    )
}
