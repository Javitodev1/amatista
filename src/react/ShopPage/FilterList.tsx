import { Component, type ReactNode } from "react"
import { FilterButton } from "./FilterButton"
import { ProductTag } from "@/types/product"
import { type Product } from "@/types/product"

interface IProps {
  setProducts: (products: Product[]) => void
}

interface IStates {
  activeFilter: ProductTag
}

export class FilterList extends Component<IProps, IStates> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      activeFilter: ProductTag.Todo,
    }
  }

  setActiveFilter = (filter: ProductTag) => {
    this.setState((prevState) => ({ ...prevState, activeFilter: filter }))
  }

  render(): ReactNode {
    const { activeFilter } = this.state
    const { setProducts } = this.props
    return (
      <div className="overflow-x-scroll whitespace-nowrap lg:whitespace-normal lg:overflow-x-auto lg:flex lg:justify-center">
        <div className="flex gap-4 w-fit py-4 lg:py-0">
          <span className="lg:hidden">{">"}</span>
          {Object.values(ProductTag).map((filter) => (
            <FilterButton
              key={filter}
              filter={filter}
              activeFilter={activeFilter}
              setFilter={this.setActiveFilter}
              setProducts={setProducts}
            />
          ))}
          <span className="lg:hidden">{"<"}</span>
        </div>
      </div>
    )
  }
}
