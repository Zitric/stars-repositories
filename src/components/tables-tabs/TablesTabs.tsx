import { Tabs, Tab, TabList, TabPanel, TabPanels } from '@chakra-ui/react'

import { RepositoriesTable } from '../../components/repositories-table'
import { LanguageFilter } from '../../components/language-filter'
import { useHomeContext } from '../../hooks/use-home'

export const TablesTabs = () => {
  const {
    filteredRepos,
    filteredFavRepos,
    languageFilters,
    languageFavFilters,
    toggleLanguageFilter,
    toggleLanguageFavFilter,
  } = useHomeContext()

  return (
    <Tabs isFitted variant='enclosed'>
      <TabList mb='1em'>
        <Tab>Every repositorio</Tab>
        <Tab>Just favorites</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <LanguageFilter
            languageFilters={languageFilters}
            toggleLanguageFilter={toggleLanguageFilter}
          />
          <RepositoriesTable
            repos={filteredRepos}
            caption='Most starred Github repositories from the last seven days'
          />
        </TabPanel>
        <TabPanel>
          <LanguageFilter
            languageFilters={languageFavFilters}
            toggleLanguageFilter={toggleLanguageFavFilter}
          />
          <RepositoriesTable
            repos={filteredFavRepos}
            caption='My favorite most starred Github repositories'
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
