import { Component, type ReactNode } from "react"
import { FilterButton } from "./FilterButton"
import { ProductTag } from "@/types/api"
import { filters } from "@/data/filters"

interface IProps {
  filter: ProductTag
  setFilter: (filter: ProductTag) => void
  prefetch: (filter: ProductTag) => void
}

export class FilterList extends Component<IProps> {

  render(): ReactNode {
    const { filter, setFilter, prefetch } = this.props
    return (
      <div className="overflow-x-scroll whitespace-nowrap lg:whitespace-normal lg:overflow-x-auto lg:flex lg:justify-center">
        <div className="flex gap-4 w-fit py-4 lg:py-0">
          <span className="lg:hidden">{">"}</span>
          {Object.values(filters).map(({tag, display}) => (
            <FilterButton
              key={tag}
              filter={tag}
              display={display}
              activeFilter={filter}
              setFilter={setFilter}
              onMouseEnter={prefetch}
            />
          ))}
          <span className="lg:hidden">{"<"}</span>
        </div>
      </div>
    )
  }
}
