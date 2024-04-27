import type { ApiResponse } from '../types/strapi'
import type { Product } from '../types/product'
import { strapiAdapter } from '../adapters/strapiAdapter'
import { Categories } from '../data/filters'
import { products } from '../data/products'

export function fetchProducts(filter: string) {
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve(
        strapiAdapter(products as ApiResponse).filter(
          ({ categories }) =>
            categories.includes(filter) || filter == Categories.ALL
        )
      )
    }, 200)
  })
}

export function getProductById(id: string) {
  return new Promise<Product | undefined>((resolve) => {
    setTimeout(() => {
      resolve(
        strapiAdapter(products as ApiResponse).find(({ slug }) => slug === id)
      )
    }, 200)
  })
}
