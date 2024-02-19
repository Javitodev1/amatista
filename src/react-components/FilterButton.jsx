export default function FilterButton({ name, changeFilter }) {
  let isActive = false
  const handleClick = () => {
    isActive = true
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
