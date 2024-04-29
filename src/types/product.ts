export interface Product {
  id: string
  slug: string
  title: string
  description: string
  price: number
  isInStock: boolean
  stockQuantity: number
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

export enum StockStates {
  IN_STOCK= "IN_STOCK",
  OUT_STOCK= "OUT_STOCK"
}