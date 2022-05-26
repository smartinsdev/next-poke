export type Data = {
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

export type Pokemon = {
  id: number
  name: string
  height: string
  weight: string
  types: [
    {
      type: {
        name: string
      }
    }
  ]
  imageUrl: string
}
