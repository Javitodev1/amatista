export default function FilterButton({ name, changeFilter }) {
  const handleClick = () => {
    changeFilter(name)
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className="capitalize hover:underline hover:text-amatista dark:text-white"
      >
        {name}
      </button>
    </li>
  )
}
