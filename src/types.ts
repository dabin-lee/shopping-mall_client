export type Rating = {
  rate: number
  counte: number
}

export type Product = {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}
