import type { Data } from '../types'

const BASE_URL = 'https://pokeapi.co/api/v2'

export async function getDataFromApi(endpoint: string): Promise<Data> {
  const data = await fetch(`${BASE_URL}${endpoint}`)
  const response = await data.json()
  return response
}
