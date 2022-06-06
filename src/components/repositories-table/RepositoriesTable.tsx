import {
  Avatar,
  IconButton,
  Table,
  Tbody,
  Link,
  Tr,
  Th,
  TableCaption,
  Tooltip,
  TableContainer,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { HeartIcon, HeartOutlineIcon } from 'chakra-ui-ionicons'
import styled from '@emotion/styled'

import { TableHead } from './TableHead'

import { useHomeContext } from '../../hooks/use-home'

interface RepositoriesTableProps {
  repos: Repository[]
  caption: string
}

export const RepositoriesTable = ({
  repos = [],
  caption,
}: RepositoriesTableProps) => {
  const { isFavoriteRepo, addToFavorites, removeFromFavorites } =
    useHomeContext()

  const handleClick = (isFavorite: boolean, repo: Repository) =>
    isFavorite ? removeFromFavorites(repo.id) : addToFavorites(repo)

  const heartIcon = (isFavorite: boolean) =>
    isFavorite ? (
      <HeartIcon boxSize={4} color={'red.300'} />
    ) : (
      <HeartOutlineIcon boxSize={4} color={'red.300'} />
    )

  return (
    <TableContainer>
      <Table>
        <TableCaption>{caption}</TableCaption>
        <TableHead />
        <Tbody>
          {repos.map(repo => {
            const {
              id,
              stargazers_count,
              name,
              html_url,
              description,
              owner: { login: ownerName, avatar_url },
            } = repo
            const isFavorite = isFavoriteRepo(id)

            return (
              <Tooltip
                hasArrow
                label={description}
                placement='bottom-start'
                key={id}
              >
                <Tr>
                  <Th isNumeric>{stargazers_count}</Th>
                  <Th>{name}</Th>
                  <OwnerTh>
                    <Avatar name={name} src={avatar_url} size='sm' />
                    {ownerName}
                  </OwnerTh>
                  <Th>
                    <IconButton
                      size='sm'
                      aria-label='Add favorite or remove from favorite'
                      icon={heartIcon(isFavorite)}
                      onClick={() => handleClick(isFavorite, repo)}
                    />
                  </Th>
                  <Th>
                    <Link href={html_url} isExternal>
                      <ExternalLinkIcon boxSize={4} color={'blue.300'} />
                    </Link>
                  </Th>
                </Tr>
              </Tooltip>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

const OwnerTh = styled(Th)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    margin-right: 15px;
  }
`
