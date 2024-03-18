import type { ProductTag } from "@/types/api"
import { Component, type ReactNode } from "react"

interface IProps {
  filter: ProductTag
  activeFilter: ProductTag
  setFilter: (filter: ProductTag) => void
  onMouseEnter: (filter: ProductTag) => void
}

export class FilterButton extends Component<IProps> {
  clickHandler = () => {
    const { filter, setFilter } = this.props
    setFilter(filter)
  }

  mouseEnterHandler = () => {
    const {filter, onMouseEnter} = this.props
    onMouseEnter(filter)
  }

  render(): ReactNode {
    const { filter, activeFilter } = this.props
    const {mouseEnterHandler} = this
    const activeStyle =
      filter === activeFilter ? "text-amatista before:max-w-full" : ""
    const { clickHandler } = this
    return (
      <button
        onClick={clickHandler}
        onMouseEnter={mouseEnterHandler}
        className={`relative capitalize duration-300 before:w-full before:h-[2px] before:bg-amatista before:absolute before:bottom-0 before:max-w-0 before:duration-300 hover:before:max-w-full hover:text-amatista dark:text-white ${activeStyle}`}
      >
        {filter}
      </button>
    )
  }
}
