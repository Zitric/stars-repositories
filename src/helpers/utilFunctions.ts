export const createFilterObject = (
  array: Repository[],
  predicate: (repo: Repository) => string,
) => {
  const object = {}
  array.forEach(item => {
    if (predicate(item)) object[predicate(item)] = true
  })

  return object
}
