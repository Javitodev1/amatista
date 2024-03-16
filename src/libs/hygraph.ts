import { ProductTag, type Product } from "@/types/product"
import { catchFecthInMemory } from "./cacheMemory"
import { GET_PRODUCT_BY_ID, GET_PRODUCTS } from "./queries"

const HYGRAPH_ENDPOINT = import.meta.env.PUBLIC_HYGRAPH_ENDPOINT

function createGraphConfig(query: string) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: query }),
  }
}

export async function hygraphQuery({
  query,
  expireTimeInHours,
}: {
  query: string
  expireTimeInHours: number
}) {
  const config = createGraphConfig(query)
  return catchFecthInMemory(
    new Promise<any>((resolve, reject) => {
      fetch(HYGRAPH_ENDPOINT, config)
        .then((response) => {
          if (!response.ok)
            reject(
              "Error al comunicarse con el servidor, porfavor intente mas tárde."
            )
          return response.json()
        })
        .then((json) => json.data)
        .then((data) => resolve(data))
    }),
    query,
    expireTimeInHours
  )
}

export async function fetchProducts(): Promise<{
  productos: Product[]
}> {
  return hygraphQuery({
    query: `
    {
      productos {
        id
        price
        size
        stock
        tag
        title
        backImg {
          url
        }
        frontImg {
          url
        }
        description
      }
    }
  `,
    expireTimeInHours: 1,
  })
}

export async function fetchProductById(id: string): Promise<{
  producto: Product
}> {
  return hygraphQuery({
    query: GET_PRODUCT_BY_ID(id),
    expireTimeInHours: 24,
  })
}

export async function fetchProductsByTag(
  tag: ProductTag | null,
  cursor: string | null
): Promise<{
  edges: [
    {
      cursor: string
      node: Product
    }
  ]
  pageInfo: {
    endCursor: string
    hasNextPage: boolean
  }
}> {
  return hygraphQuery({
    query: GET_PRODUCTS(tag, cursor),
    expireTimeInHours: 1,
  })
}
