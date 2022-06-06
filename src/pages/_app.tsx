import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../styles/theme'
import { AppProps } from 'next/app'

import { HomeProvider } from '../hooks/use-home'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <HomeProvider>
        <Component {...pageProps} />
      </HomeProvider>
    </ChakraProvider>
  )
}

export default MyApp
