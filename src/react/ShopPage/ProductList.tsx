import { Component, type ReactNode } from "react";
import { ProductCard } from "./ProductCard.tsx"
import { type Product } from "@/types/api";

interface IProps {
  products: Product[]
}

export class ProductList extends Component<IProps> {
  render(): ReactNode {
    const {products} = this.props
    return (
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {products.map((product) => (<ProductCard key={product.id} product={product} />))}
      </div>
    )
  }
}
