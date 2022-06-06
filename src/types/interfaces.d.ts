interface Repository {
  id: number
  stargazers_count: number
  name: string
  owner: { login: string; avatar_url: string }
  html_url: string
  description: string
  language: string
}
