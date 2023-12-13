import { Spinner, Box } from '@chakra-ui/react'

export const FullscreenBackdrop = () => {
    return (
        <Box
            opacity={1}
            position="fixed"
            top={0}
            bottom={0}
            right={0}
            left={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="rgba(0, 0, 0, 0.6)"
            zIndex={9999}
        >
            <Spinner size="xl" color="teal.200" />
        </Box>
    )
}
