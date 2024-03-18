import { Component, type ReactNode } from "react"
import { type Product } from "@/types/api"

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
        key: product.frontImg.id,
        id: "firstImage",
      },
      {
        src: product.backImg.url,
        alt: product.title,
        key: product.backImg.id,
        id: "secondImage",
      },
      {
        src: product.miniatura.url,
        alt: product.title,
        key: product.miniatura.id,
        id: "thirdImage",
      },
    ]
    return (
      <div className="relative overflow-y-hidden">
        <div
          style={{ scrollbarWidth: "none" }}
          className="max-w-[500px] flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          {images.map(({ src, alt, key, id }) => (
            <img
              key={key}
              className="max-w-[500px] aspect-product shrink-0 grow basis-full snap-start object-cover"
              id={id}
              src={src}
              alt={alt}
              decoding="async"
              loading="lazy"
            />
          ))}
        </div>
        <div className="md:flex hidden mt-4 justify-center gap-8">
          {images.map(({ id }, index) => (
            <a
              key={index}
              href={`#${id}`}
              className="aspect-square h-12 rounded-full bg-raw_white duration-200 hover:bg-amatista"
            />
          ))}
        </div>
      </div>
    )
  }
}
