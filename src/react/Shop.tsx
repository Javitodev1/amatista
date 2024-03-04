import { ProductList } from "./ProductList"
import { FilterList } from "./FilterList"
import { Component, type ReactNode } from "react"
import { ProductTag, type Product } from "@/types/product"
import { fetchProducts } from "@/libs/hygraph"

interface IProps {}

interface IStates {
  products: Product[]
  filter: ProductTag
  loading: boolean
}

export default class Shop extends Component<IProps, IStates> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      products: [],
      filter: ProductTag.Todo,
      loading: false,
    }
  }

  componentDidMount(): void {
    this.setState((prevState) => ({ ...prevState, loading: true }))
    fetchProducts()
      .then((data) => data.productos)
      .then((products) =>
        this.setState((prevState) => ({
          ...prevState,
          products: products,
          loading: false,
        }))
      )
  }

  filterProducts = (): Product[] => {
    const { products, filter } = this.state
    return products.filter(
      ({ tag }) => tag.includes(filter) || filter === ProductTag.Todo
    )
  }

  render(): ReactNode {
    const { loading } = this.state

    return (
      <div className="min-h-screen">
        <div className=" mx-auto md:max-w-6xl">
          <FilterList />
          <hr className="h-1 my-4 bg-gray-500 rounded-full opacity-20" />
          {loading && <p>loading...</p>}
          {!loading && <ProductList products={this.filterProducts()} />}
        </div>
      </div>
    )
  }
}
