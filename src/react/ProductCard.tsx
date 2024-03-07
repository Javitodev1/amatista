import { Component, type ReactNode } from "react";
import { type Product } from "@/types/product";
import formatCurency from "@/utils/currency";

interface IProps {
  product: Product
}

export class ProductCard extends Component<IProps> {
  render(): ReactNode {
    const {
      id,
      title,
      price,
      frontImg,
      stock,
    } = this.props.product;
    
    const href = `/tienda/${id}`
    const priceFormatted = formatCurency(price);
    const isSoldout = stock < 1 || !stock;
    return (
      <a href={href} className="inline-block group">
        <div className="relative mb-4 overflow-hidden">
          <img
            src={frontImg.url}
            alt={title}
            className="duration-1000 group-hover:scale-110"
          />
          {isSoldout && (
            <span className="absolute px-3 py-1 text-sm rounded-full bottom-3 left-3 text-raw_white bg-midnight_green-900">
              Agotado
            </span>
          )}
        </div>
        <h3 className="mb-2 font-semibold dark:text-white">{title}</h3>
        <p className="dark:text-white">{priceFormatted}</p>
      </a>
    );
  }
}
