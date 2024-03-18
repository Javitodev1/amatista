import { Component, type ReactNode } from "react"
import { type Product } from "@/types/api"
import { fetchProductById } from "@/libs/hygraph"
import formatCurreny from "@/utils/currency"
import WspButton from "./WspButton"
import StockBadge from "./StockBadge"
import ImageSlider from "./ImageSlider"

interface IProps {
  productID: string | undefined
  productURL: string
}
interface IState {
  product: Product | undefined
  loading: boolean
  error: string
}

export default class ProductPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      product: undefined,
      loading: false,
      error: "",
    }
  }

  componentDidMount(): void {
    this.setState((prevState) => ({ ...prevState, loading: true }))
    const { productID } = this.props
    if (!productID) {
      return this.setState((prevState) => ({
        ...prevState,
        error: "Producto No encontrado o ha sido eliminado.",
      }))
    }

    fetchProductById(productID)
      .then(({ producto }) => {
        this.setState((prevState) => ({
          ...prevState,
          product: producto,
          loading: false,
        }))
      })
      .catch(() => {
        this.setState((prevState) => ({
          ...prevState,
          error:
            "Error al comunicarse con el servidor, por favor intentar más tarde.",
        }))
      })
  }

  render(): ReactNode {
    const { product, error, loading } = this.state

    if (error) return <div>{error}</div>
    if (loading) return <div>cargando...</div>
    if (!product) return <div>Este producto ha encontrado un nuevo hogar</div>

    const { productURL } = this.props
    const { stock, title, description, tag, size, price } = product
    const hrefWsp = `https://api.whatsapp.com/send?phone=59896667633&text=Quiero este producto: ${productURL}`
    return (
      <div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <ImageSlider product={product!} />
          <div className="md:p-12 px-6 mb-12 md:mb-0 md:order-last order-first">
            <h2>{title}</h2>
            {tag.map((t) => (
              <h3 key={t}>{t.replace("_", " ")}</h3>
            ))}
            <p>{description}</p>
            <p>Talla: {size}</p>
            <p>Precio: {formatCurreny(price)}</p>
            <StockBadge stock={stock} />
            <WspButton href={hrefWsp} />
          </div>
        </div>
      </div>
    )
  }
}
