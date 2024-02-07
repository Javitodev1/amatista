import { useState } from 'react'
import FilterButton from './FilterButton'
import ProductCard from './ProductCard'

const fetchUsers = (filter, data) => {
  return data.filter((product) => product.tag == filter || filter == 'Todo')
}

export default function Shop({ data, initFilter }) {
  let [filter, setFilter] = useState(initFilter)
  return (
    <div>
      <ul className="flex gap-10 justify-center">
        <li>
          <FilterButton
            name={'Todo'}
            changeFilter={setFilter}
          />
        </li>
        <li>
          <FilterButton
            name={'Blusas'}
            changeFilter={setFilter}
          />
        </li>
        <li>
          <FilterButton
            name={'Pantalones'}
            changeFilter={setFilter}
          />
        </li>
        <li>
          <FilterButton
            name={'Camisas'}
            changeFilter={setFilter}
          />
        </li>
        <li>
          <FilterButton
            name={'Accesorios'}
            changeFilter={setFilter}
          />
        </li>
        <li>
          <FilterButton
            name={'Vestidos'}
            changeFilter={setFilter}
          />
        </li>
        <li>
          <FilterButton
            name={'Poleras'}
            changeFilter={setFilter}
          />
        </li>
        <li>
          <FilterButton
            name={'Abrigos'}
            changeFilter={setFilter}
          />
        </li>
      </ul>
      <hr className="my-4 h-1 rounded-full bg-gray-500 opacity-20" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
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
