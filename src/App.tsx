import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { AppRoutes } from 'src/router/AppRoutes'
import { theme } from 'src/style/theme'

export const App = () => {
    return (
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <AppRoutes />
            </ChakraProvider>
        </BrowserRouter>
    )
}
