import { Pokemon } from '../types'

export const Card = ({ name, types, height, weight, id }: Pokemon) => {
  const pokeIndexImg = ('000' + id).slice(-3)
  return (
    <div className="max-w-xs rounded-3xl border bg-white p-10 text-center font-semibold shadow-lg">
      <img
        className="mx-auto mb-3 h-32 w-32 rounded-full shadow-lg"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndexImg}.png`}
        alt="product designer"
      />
      <h1 className="text-lg text-gray-700">{name}</h1>
      {types.map(({ type }) => (
        <span key={type.name} className="mr-1 text-sm text-gray-400">
          {type.name}
        </span>
      ))}
      <p className="mt-4 text-xs text-gray-400">
        peso: {weight} e tamanho: {height}
      </p>
    </div>
  )
}
