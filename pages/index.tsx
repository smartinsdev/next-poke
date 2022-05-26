import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { getDataFromApi, getPokemonsDetail } from '../utils/getDataFromApi'
import type { Pokemon } from '../types'
import { Card } from '../components/Card'

type Props = {
  nextPage: string | null
  previousPage: string | null
  count: number
  pokemons: Pokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Next Poke</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to NextPoke</h1>

        <div className="my-6 grid grid-cols-3 gap-2">
          {pokemons.map((pokemon, index) => (
            <Card
              key={index}
              name={pokemon.name}
              types={pokemon.types}
              height={pokemon.height}
              weight={pokemon.weight}
              id={pokemon.id}
              imageUrl={''}
            />
          ))}
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getDataFromApi('/pokemon')
  const pokemons = await getPokemonsDetail(
    data.results.map((value) => value.url)
  )

  return {
    props: {
      nextPage: data.next,
      previousPage: data.previous,
      count: data.count,
      pokemons,
    },
  }
}

export default Home
