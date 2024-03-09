import { Component, type ReactNode } from "react"

interface IProps {
  stock: number
}

export default class StockBadge extends Component<IProps> {
  render(): ReactNode {
    const { stock } = this.props
    const isSoldOut = stock < 1
    const content = isSoldOut ? "agotado" : "disponible"
    const classBadgeBg = isSoldOut ? "bg-black" : "bg-amatista"
    return (
      <span
        className={`capitalize px-3 py-1 text-sm rounded-full text-raw_white ${classBadgeBg}`}
      >
        {content}
      </span>
    )
  }
}
