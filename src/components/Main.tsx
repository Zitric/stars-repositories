import { Flex, FlexProps } from '@chakra-ui/react'

export const Main = (props: FlexProps) => (
  <Flex
    as='section'
    direction='column'
    alignItems='center'
    justifyContent='flex-start'
    transition='all 0.15s ease-out'
    minHeight='80vh'
    {...props}
  />
)
