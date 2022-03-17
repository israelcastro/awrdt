import { AppProps } from 'next/app'
import { ChakraProvider} from '@chakra-ui/react'
import { customTheme } from '../styles/customTheme'
import { AuthProvider } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
      <ChakraProvider theme={customTheme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    
  )
}

export default MyApp
