import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

export type Pokemon = {
  url: string
  name: string
  img: string
  type: string
  height: string
  weight: string
}

type Props = {
  nextPage: string | null
  previousPage: string | null
  count: number
  pokemons: Pokemon[]
}

const BASE_URL = 'https://pokeapi.co/api/v2/'

const Home: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Next Poke</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to NextPoke</h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {pokemons.map((pokemon, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center px-2 py-3"
              >
                <h3>{pokemon.name}</h3>
                <a href={pokemon.url}>detail</a>
              </div>
            )
          })}
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
  const getPokemons = await fetch(`${BASE_URL}pokemon/`)
  const data = await getPokemons.json()
  return {
    props: {
      pokemons: data.results,
      count: data.count,
      nextPage: data.next,
      previousPage: data.previous,
    },
  }
}

export default Home
