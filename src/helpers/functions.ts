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

export const isEveryFalsy = (array: any) =>
  Object.values(array)
    .map(value => value)
    .every(item => item === false)
