import { AppProps } from 'next/app'
import { ChakraProvider} from '@chakra-ui/react'
import { customTheme } from '../styles/customTheme'
import { AuthProvider } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  )
}

export default MyApp
