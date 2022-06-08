import styled from '@emotion/styled'
import { Button, ButtonProps } from '@chakra-ui/react'

interface FilterButtonProps {
  language: string
  value: boolean | unknown
  onClick: (language: string) => void
}

export const FilterButton = ({
  language,
  value,
  onClick,
}: FilterButtonProps) => {
  const variant = value ? 'solid' : 'outline'

  return (
    <StyledButton
      onClick={() => onClick(language)}
      variant={variant}
      colorScheme='green'
    >
      {language}
    </StyledButton>
  )
}

const StyledButton = styled(Button)<ButtonProps>`
  margin: 10px;
`
