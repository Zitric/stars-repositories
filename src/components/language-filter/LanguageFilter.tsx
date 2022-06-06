import styled from '@emotion/styled'
import { FilterButton } from './FilterButton'

interface LanguageFilterProps {
  [key: string]: string | unknown
  toggleLanguageFilter: (language: string) => void
}

export const LanguageFilter = ({
  languageFilters,
  toggleLanguageFilter,
}: LanguageFilterProps) => (
  <Wrapper>
    {Object.entries(languageFilters).map(([key, value]) => (
      <FilterButton
        key={key}
        language={key}
        value={value}
        onClick={toggleLanguageFilter}
      />
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
