import type { ProductTag } from "@/types/product";
import { Component, type ReactNode } from "react";

interface IProps {
  filter: ProductTag;
  setFilter: (filter: ProductTag) => void
  activeFilter: ProductTag
}

export class FilterButton extends Component<IProps> {

  clickHandler = () => {
    const {filter, setFilter} = this.props
    setFilter(filter)
  }

  render(): ReactNode {
    const { filter, activeFilter } = this.props;
    const activeStyle = filter === activeFilter ? "text-amatista" : ""
    const {clickHandler} = this
    return (
      <button
        onClick={clickHandler}
        className={`relative capitalize duration-300 before:w-full before:h-[2px] before:bg-amatista before:absolute before:bottom-0 before:max-w-0 before:duration-300 hover:before:max-w-full hover:text-amatista dark:text-white ${activeStyle}`}
      >
        {filter}
      </button>
    );
  }
}
