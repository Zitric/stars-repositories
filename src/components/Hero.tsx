import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    as='header'
    justifyContent='center'
    alignItems='center'
    height='20vh'
    bgGradient='linear(to-l, heroGradientStart, heroGradientEnd)'
    bgClip='text'
  >
    <Heading fontSize='6vw'>{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Most starred repositories',
}
