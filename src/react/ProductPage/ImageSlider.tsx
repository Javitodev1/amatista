import { Component, type ReactNode } from "react"
import { type Product } from "@/types/product"

interface IProps {
  product: Product
}

export default class ImageSlider extends Component<IProps> {
  render(): ReactNode {
    const { product } = this.props
    const images = [
      {
        src: product.frontImg.url,
        alt: product.title,
        id: "1",
      },
      {
        src: product.backImg.url,
        alt: product.title,
        id: "2",
      },
      {
        src: product.frontImg.url,
        alt: product.title,
        id: "3",
      },
    ]
    return (
      <div className="relative overflow-y-hidden col-span-2">
        <div
          style={{ scrollbarWidth: "none" }}
          className="max-h-[650px] flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          {images.map(({ src, alt, id }) => (
            <img
              className="aspect-square shrink-0 grow basis-full snap-start object-cover"
              id={id}
              src={src}
              alt={alt}
              decoding="async"
              loading="lazy"
            />
          ))}
        </div>
        <div className="md:flex hidden mt-4 justify-center gap-8">
          {images.map(({ id }) => (
            <a
              href={`#${id}`}
              className="aspect-square h-12 rounded-full bg-raw_white duration-200 hover:bg-amatista"
            />
          ))}
        </div>
      </div>
    )
  }
}
