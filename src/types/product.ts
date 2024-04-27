export interface Product {
  id: string
  slug: string
  title: string
  description: string
  price: number
  stock: number
  thumbnail: ProductImage
  images: ProductImage[]
  categories: string[]
}

export interface ProductImage {
  id: string
  url: string
  width: number
  height: number
}
