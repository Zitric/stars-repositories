import { Spinner } from '@chakra-ui/react'

import { Hero } from '../components/hero/Hero'
import { Container } from '../components/container/Container'
import { Main } from '../components/main/Main'
import { DarkModeSwitch } from '../components/dark-mode-switch/DarkModeSwitch'
import { TablesTabs } from '../components/tables-tabs'
import { ErrorMessage } from '../components/error-message'

import { useHomeContext } from '../hooks/use-home'

const Home = () => {
  const { isError, isLoading } = useHomeContext()

  return (
    <Container height='100%'>
      <Hero />
      <Main>
        {isError ? (
          <ErrorMessage />
        ) : isLoading ? (
          <Spinner size='xl' />
        ) : (
          <TablesTabs />
        )}
      </Main>

      <DarkModeSwitch />
    </Container>
  )
}

export default Home
