import { Thead, Tr, Th } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export const TableHead = () => (
  <Thead>
    <Tr>
      <Th isNumeric>
        <StarIcon boxSize={4} color='yellow.300' />
      </Th>
      <Th>Name</Th>
      <Th>Owner</Th>
      <Th></Th>
      <Th></Th>
    </Tr>
  </Thead>
)
