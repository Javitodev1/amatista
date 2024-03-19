import type { Product } from "@/types/api"
import { Component, type ReactNode } from "react"
import { ProductList } from "../ShopPage/ProductList"
import { fetchLatestProducts } from "@/libs/hygraph"

interface IProps {}
interface IStates {
  products: Product[]
  loading: boolean
}

export default class Latest extends Component<IProps, IStates> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      products: [],
      loading: false,
    }
  }

  componentDidMount(): void {
    this.setState((prevState) => ({ ...prevState, loading: true }))
    fetchLatestProducts()
      .then(({ productos }) => {
        this.setState((prevState) => ({
          ...prevState,
          loading: false,
          products: productos,
        }))
      })
      .catch((reason) => console.log(reason))
  }

  render(): ReactNode {
    const { products, loading } = this.state

    if (loading) return <div>cargando...</div>
    return <ProductList products={products} />
  }
}
