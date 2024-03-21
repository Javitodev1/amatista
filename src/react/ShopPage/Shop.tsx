import { ProductList } from "../ShopPage/ProductList"
import { FilterList } from "../ShopPage/FilterList"
import { Component, type ReactNode } from "react"
import { ProductTag, type Product, type PageInfo } from "@/types/api"
import { fetchProductsByTag } from "@/libs/hygraph"

interface IProps {
  initFilter: ProductTag
}

interface IStates {
  products: Product[]
  filter: ProductTag
  loading: boolean
  hasNextPage: boolean
  cursor: string | null
}

const fetchProducts = (filter: ProductTag, cursor: string | null = null) => {
  return new Promise<{ products: Product[]; pageInfo: PageInfo }>((resolve) => {
    fetchProductsByTag(filter, cursor)
      .then((data) => data.productosConnection)
      .then(({ edges, pageInfo }) => ({
        products: edges.map((edge) => edge.node),
        pageInfo,
      }))
      .then((data) => resolve(data))
  })
}

export default class Shop extends Component<IProps, IStates> {
  constructor(props: IProps) {
    super(props)
    const { initFilter } = this.props
    this.state = {
      products: [],
      filter: initFilter,
      loading: false,
      hasNextPage: false,
      cursor: null,
    }
  }

  componentDidMount(): void {
    const { filter } = this.state
    this.setFilter(filter)
  }

  setFilter = (filter: ProductTag) => {
    this.setState((prevState) => ({ ...prevState, loading: true }))
    fetchProducts(filter).then(({ products, pageInfo }) => {
      this.setState((prevState) => ({
        ...prevState,
        products: products,
        filter: filter,
        loading: false,
        pageInfo: pageInfo,
        hasNextPage: pageInfo.hasNextPage,
        cursor: pageInfo.endCursor,
      }))
    })
  }

  handleClick = () => {
    const { filter, products: fetchedProducts, cursor } = this.state
    fetchProducts(filter, cursor).then(({ products, pageInfo }) => {
      const concat = fetchedProducts.concat(products)
      this.setState((prevState) => ({
        ...prevState,
        products: concat,
        cursor: pageInfo.endCursor,
        hasNextPage: pageInfo.hasNextPage,
      }))
    })
  }

  prefetch = (filter: ProductTag) => {
    fetchProducts(filter)
  }

  render(): ReactNode {
    const { loading, products, filter, hasNextPage } = this.state
    const { setFilter, handleClick, prefetch } = this
    return (
      <div className="min-h-screen">
        <div className=" mx-auto md:max-w-6xl">
          <FilterList
            filter={filter}
            setFilter={setFilter}
            prefetch={prefetch}
          />
          <hr className="h-1 my-4 bg-gray-500 rounded-full opacity-20" />
          {loading && <p>cargando...</p>}
          {!loading && <ProductList products={products} />}
          <div className="flex justify-center">
            {hasNextPage && (
              <button
                className="border-black border-4 text-lg px-12 py-2 font-lora font-bold hover:opacity-60 duration-200 text-black dark:border-white dark:text-white"
                onClick={handleClick}
              >
                Mostrar más
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}
