import { Pokemon } from '../types'

export const Card = ({ name, types, height, weight, id }: Pokemon) => {
  return (
    <div className="max-w-xs rounded-3xl border bg-white p-10 text-center font-semibold shadow-lg">
      <img
        className="mx-auto mb-3 h-32 w-32 rounded-full shadow-lg"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        alt="product designer"
      />
      <h1 className="text-lg text-gray-700">{name}</h1>
      {types.map(({ type }) => (
        <span className="mr-1 text-sm text-gray-400">{type.name}</span>
      ))}
      <p className="mt-4 text-xs text-gray-400">
        peso: {weight} e tamanho: {height}
      </p>
    </div>
  )
}
