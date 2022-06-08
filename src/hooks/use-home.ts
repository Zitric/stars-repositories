import constate from 'constate'
import { useState, useEffect } from 'react'

import { useLocalStorage } from './use-local-storage'
import { useStarsRepositories } from './use-stars-repositories'

import { createFilterObject, isEveryFalsy } from '../helpers/functions'

export const useHomeHook = () => {
  const { repos, isError, isLoading } = useStarsRepositories()
  const [filteredRepos, setFilteredRepos] = useState([])
  const [languageFilters, setLanguageFilters] = useState({})

  const [storedValue, setValue] = useLocalStorage('favorites', [])
  const [favoriteRepos, setFavoriteRepos] = useState(storedValue || [])
  const [filteredFavRepos, setFilteredFavoRepos] = useState([])
  const [languageFavFilters, setLanguageFavFilters] = useState({})

  /* -------------------------- Every repos useEffect ------------------------- */

  useEffect(() => {
    const filteredRepos = isEveryFalsy(languageFilters)
      ? repos
      : repos.filter(
          ({ language }) => language && languageFilters[language] === true,
        )

    setFilteredRepos(filteredRepos)
  }, [languageFilters, repos])

  useEffect(() => {
    const languageFilters = createFilterObject(repos, repo => repo.language)
    setLanguageFilters(languageFilters)
  }, [repos])

  /* ------------------------ Favorite repos useEffect ------------------------ */

  useEffect(() => {
    const filteredFavRepos = isEveryFalsy(languageFavFilters)
      ? favoriteRepos
      : favoriteRepos.filter(
          ({ language }) => language && languageFavFilters[language] === true,
        )
    setFilteredFavoRepos(filteredFavRepos)
  }, [languageFavFilters, favoriteRepos])

  useEffect(() => {
    const languageFavFilters = createFilterObject(
      favoriteRepos,
      repo => repo.language,
    )
    setLanguageFavFilters(languageFavFilters)
  }, [favoriteRepos])

  /* --------------------------------- Methods -------------------------------- */

  const isFavoriteRepo = (id: number) =>
    favoriteRepos.some(item => item.id === id)

  const addToFavorites = (newItem: Repository) => {
    const favoritesPlusOne = [...favoriteRepos, newItem]
    setFavoriteRepos(favoritesPlusOne)
    setValue(favoritesPlusOne)
  }

  const removeFromFavorites = (id: number) => {
    const favoritesLessOne = favoriteRepos.filter(item => item.id !== id)
    setFavoriteRepos(favoritesLessOne)
    setValue(favoritesLessOne)
  }

  const toggleLanguageFilter = (language: string) => {
    const updatedLanguageFilters = { ...languageFilters }
    updatedLanguageFilters[language] = !updatedLanguageFilters[language]
    setLanguageFilters(updatedLanguageFilters)
  }

  const toggleLanguageFavFilter = (language: string) => {
    const updatedLanguageFavFilters = { ...languageFavFilters }
    updatedLanguageFavFilters[language] = !updatedLanguageFavFilters[language]
    setLanguageFavFilters(updatedLanguageFavFilters)
  }

  return {
    repos,
    filteredRepos,
    favoriteRepos,
    filteredFavRepos,
    isError,
    isLoading,
    languageFilters,
    languageFavFilters,
    isFavoriteRepo,
    addToFavorites,
    removeFromFavorites,
    toggleLanguageFilter,
    toggleLanguageFavFilter,
  }
}

const [HomeProvider, useHomeContext] = constate(useHomeHook)

export { HomeProvider, useHomeContext }
