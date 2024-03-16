import { ProductTag } from "@/types/product"

export const GET_PRODUCT_BY_ID = (id: string) => {
  return `
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
  `
}

export const GET_PRODUCTS = (
  tag: ProductTag | null,
  cursor: string | null = null
) => {
  const category = !tag ? "" : tag.replaceAll(" ", "_")
  return `
  {
    productosConnection(
      first: 10,
      ${!cursor ? "" : `after: "${cursor}",`}
      ${
        !tag || tag === ProductTag.Todo
          ? ""
          : `where: {tag_contains_some: ${category}},`
      }
    ) {
      edges {
        cursor
        node {
          description
          id
          price
          size
          stock
          tag
          title
          backImg {
            id
            url
          }
          frontImg {
            id
            url
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }`
}
