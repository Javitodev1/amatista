import type { ApiResponse } from '../types/strapi'
import type { Product, ProductImage } from '../types/product'

const PUBLIC_STRAPI_URL = ""

export function strapiAdapter(response: ApiResponse): Product[] {
  const { data } = response.data.products
  return data.map(({ id, attributes }) => {
    const {
      slug,
      title,
      description,
      price,
      stock,
      images,
      categories,
      thumbnail,
    } = attributes

    const thumbnailImage = {
      id: thumbnail.data.id,
      url: PUBLIC_STRAPI_URL + thumbnail.data.attributes.url,
      height: thumbnail.data.attributes.height,
      width: thumbnail.data.attributes.height,
    } satisfies ProductImage

    const tags = categories.data.map(({ attributes }) => attributes.Tag)

    const productImages = images.data.map(({ id, attributes }) => {
      const { height, url, width } = attributes
      return {
        id: id,
        height: height,
        url: PUBLIC_STRAPI_URL + url,
        width: width,
      } satisfies ProductImage
    })

    return {
      id: id,
      slug: slug,
      title: title,
      description: description,
      price: price,
      stock: stock,
      categories: tags,
      images: productImages,
      thumbnail: thumbnailImage,
    } satisfies Product
  })
}
