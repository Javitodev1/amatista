import type { WPResponse, PageInfo, Edge } from '../types/wp-response'
import type { Product, ProductImage } from '../types/product'

const { PUBLIC_WP_UPLOAD } = import.meta.env

export const moneyFormatter = Intl.NumberFormat('es-UY', {
  style: 'currency',
  currency: 'UYU',
  minimumFractionDigits: 0,
})

export function wpByProductAdapter(edge: Edge) {
  const { node } = edge

  const price = parseFloat(node.price)

  const stock: number = node.stockQuantity ?? 1

  const categories = node.productCategories.nodes.map((node) => node.slug)
  
  const featuredImageNode = node.featuredImage.node
  const thumbnail = {
    id: featuredImageNode.id,
    url: PUBLIC_WP_UPLOAD + featuredImageNode.uri,
    height: featuredImageNode.mediaDetails.height,
    width: featuredImageNode.mediaDetails.width,
  } satisfies ProductImage

  const images = node.galleryImages.nodes.map((node) => {
    return {
      id: node.id,
      url: PUBLIC_WP_UPLOAD + node.uri,
      height: node.mediaDetails.height,
      width: node.mediaDetails.width,
    }
  }) satisfies ProductImage[]

  return {
    id: node.id,
    title: node.name,
    description: node.description ?? '',
    price: price,
    slug: node.slug,
    stock: stock,
    categories: categories,
    thumbnail: thumbnail,
    images: images
  } satisfies Product
}

export function wpProductsAdapter(res: WPResponse) {
  const { pageInfo, edges } = res.data.products

  const products = edges.map((edge) => wpByProductAdapter(edge))

  return {products, pageInfo} satisfies {products: Product[], pageInfo: PageInfo}
}
