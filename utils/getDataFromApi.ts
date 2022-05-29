import { prisma } from '../lib/prisma'
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

async function populateDatabase() {
  const data = await getDataFromApi('/pokemon/?limit=200&offset=0')
  const pokemons = await getPokemonsDetail(
    data.results.map((value) => value.url)
  )

  await pokemons.map(async (value) => {
    const pokeIndexImg = ('000' + value.id).slice(-3)
    const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndexImg}.png`
    const types = value.types.map(({ type }) => type.name)
    const abilities = value.abilities.map(({ ability }) => ability.name)
    await prisma.pokemon.create({
      data: {
        name: value.name,
        height: parseFloat(value.height),
        weight: parseFloat(value.weight),
        image: imageUrl,
        types: {
          create: types.map((value) => {
            return {
              type: {
                create: {
                  name: value,
                },
              },
            }
          }),
        },
        abilities: {
          create: abilities.map((value) => {
            return {
              ability: {
                create: {
                  name: value,
                },
              },
            }
          }),
        },
      },
    })
  })
}
