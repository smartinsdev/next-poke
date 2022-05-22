const BASE_URL = 'https://pokeapi.co/api/v2'

type Data = {
  next: string | null
  previous: string | null
  count: number | null
  results: [
    {
      name: string
      url: string
    }
  ]
}

export async function getDataFromApi(endpoint: string): Promise<Data> {
  const data = await fetch(`${BASE_URL}${endpoint}`)
  const response = await data.json()
  return response
}
