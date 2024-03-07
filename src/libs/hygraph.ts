import { type Product } from "@/types/product"

const HYGRAPH_ENDPOINT =
  "https://sa-east-1.cdn.hygraph.com/content/clsw2dllh01en07unanpr7pv6/master"

interface InCacheMemory {
  expireAt: number
  data: any
}

function createGraphConfig(query: string) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: query }),
  }
}

function createCacheMemory(data: JSON, expireTimeInHours: number) {
  const createdAt = new Date()
  const expireAt = new Date().setHours(createdAt.getHours() + expireTimeInHours)

  return {
    expireAt: expireAt.valueOf(),
    data: data as JSON,
  } satisfies InCacheMemory
}

export async function hygraphQuery({
  query,
  expireTimeInHours,
}: {
  query: string
  expireTimeInHours: number
}) {
  return new Promise<any>((resolve, reject) => {
    // Looking for data in cache
    const queryInCache = localStorage.getItem(query)
    if (queryInCache) {
      const cacheInMemory = JSON.parse(queryInCache) as InCacheMemory
      const currentTime = new Date().valueOf()

      if (currentTime < cacheInMemory.expireAt) {
        return resolve(cacheInMemory.data)
      } else {
        localStorage.removeItem(query)
      }
    }

    // Fetching Data
    const config = createGraphConfig(query)
    fetch(HYGRAPH_ENDPOINT, config)
      .then((response) => {
        if (!response.ok)
          reject(`Error on fetching to Hygraph, Status: ${response.statusText}`)
        return response.json()
      })
      .then((json) => json.data)
      .then((data) => {
        const cache = createCacheMemory(data, expireTimeInHours)
        localStorage.setItem(query, JSON.stringify(cache))
        resolve(data)
      })
  })
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
    query: `
    {
      producto(where: {id: "${id}"}) {
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
    expireTimeInHours: 24,
  })
}
