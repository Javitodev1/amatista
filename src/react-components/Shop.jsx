import { useState } from 'react'
import FilterButton from './FilterButton'
import ProductCard from './ProductCard'
import filters from '@/data/filters.json'

const fetchUsers = (filter, data) => {
  return data.filter((product) => product.tag == filter || filter == 'todo')
}

export default function Shop({ data, initFilter }) {
  let [filter, setFilter] = useState(initFilter)
  return (
    <div className="min-h-screen">
      <div className="max-w-[360px] mx-auto md:max-w-6xl">
        <div className="overflow-x-scroll whitespace-nowrap md:whitespace-normal md:overflow-x-auto md:flex md:justify-center">
          <ul className="flex gap-4 w-fit">
            {filters.map((name) => (
              <FilterButton
                name={name}
                changeFilter={setFilter}
                key={name}
              />
            ))}
          </ul>
        </div>
      </div>
      <hr className="h-1 my-4 bg-gray-500 rounded-full opacity-20" />
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
        {fetchUsers(filter, data).map((product, i) => (
          <ProductCard
            {...product}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}
