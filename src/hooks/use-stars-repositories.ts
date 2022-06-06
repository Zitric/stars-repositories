import useSWR from 'swr'
import dayjs from 'dayjs'

import { BASE_URL } from '../helpers/constants'

export const useStarsRepositories = () => {
  const SevenDaysBeforeNow = dayjs().subtract(7, 'day').format('YYYY-MM-DD')

  const fetcher = (url: string) => fetch(url).then(res => res.json())

  const address =
    BASE_URL + `?q=created:>${SevenDaysBeforeNow}&sort=stars&order=desc`

  const { data: { items: repos = [] } = [], error: isError } = useSWR(
    address,
    fetcher,
  )

  return {
    repos,
    isError,
    isLoading: !isError && repos.length === 0,
  }
}
