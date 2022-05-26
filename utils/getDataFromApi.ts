import type { Data, Pokemon } from '../types'

const BASE_URL = 'https://pokeapi.co/api/v2'

export async function getDataFromApi(endpoint?: string): Promise<Data> {
  const data = await fetch(`${BASE_URL}${endpoint}`)
  const response = await data.json()
  return response
}

export async function getPokemonsDetail(urls: string[]): Promise<Pokemon[]> {
  const data = await Promise.all(urls.map(async (url) => await fetch(url)))
  const response = await Promise.all(data.map(async (res) => await res.json()))
  return response
}
