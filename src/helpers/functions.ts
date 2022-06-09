export const isEveryFalsy = (array: object) =>
  Object.values(array)
    .map(value => value)
    .every(item => item === false)

export const calculateFilteredRepos = (
  languagesFilters: object,
  repos: Repository[],
) =>
  isEveryFalsy(languagesFilters)
    ? repos
    : repos.filter(
        ({ language }) => language && languagesFilters[language] === true,
      )

export const createFilterObject = (
  array: Repository[],
  predicate: (repo: Repository) => string,
) => {
  const object = {}
  array.forEach(item => {
    if (predicate(item)) object[predicate(item)] = false
  })

  return object
}
