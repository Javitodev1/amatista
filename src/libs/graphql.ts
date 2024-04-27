import type { Node, PageInfo, WPResponse } from '@/types/wp-response'
import { WP_QUERIES } from './wp-queries'
import { wpByProductAdapter, wpProductsAdapter } from '../adapters/wordpress'
import type { Product } from '@/types/product'

const { PUBLIC_WP_API } = import.meta.env

export function createConfig(query: string) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: query }),
  }
}

export function graphqlQuery(url: string, query: string) {
  const config = createConfig(query)
  return fetch(url, config)
}

export function fetchProducts(category: string, cursor: string) {
  return new Promise<{ products: Product[]; pageInfo: PageInfo }>(
    (resolve, reject) => {
      graphqlQuery(PUBLIC_WP_API, WP_QUERIES.GET_PRODUCTS(20, category, cursor))
        .then((response) => {
          if (!response.ok) reject('bad graphql query')
          return response.json()
        })
        .then((json) => json as WPResponse)
        .then((wpresponse) => wpProductsAdapter(wpresponse))
        .then((data) => resolve(data))
    }
  )
}

export function fetchProudctById(id: string) {
  return new Promise<Product>((resolve, reject) => {
    graphqlQuery(PUBLIC_WP_API, WP_QUERIES.GET_PRODUCT_BY_ID(id))
      .then((response) => {
        if (!response.ok) reject('bad graphql query')
        return response.json()
      })
      .then((json) => json as { data: { product: Node } })
      .then((node) => wpByProductAdapter({ node: node.data.product }))
      .then((data) => resolve(data))
  })
}
