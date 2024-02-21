export default function FilterButton({ filter, changeFilter }) {
  return (
    <li>
      <a
        href={`/tienda/${filter}`}
        className="capitalize hover:underline hover:text-amatista dark:text-white"
      >
        {filter}
      </a>
    </li>
  )
}
