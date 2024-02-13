export default function FilterButton({ name, changeFilter }) {
  let isActive = false
  const handleClick = () => {
    isActive = true
    changeFilter(name)
  }

  return (
    <button
      onClick={handleClick}
      className="hover:underline hover:text-amatista"
    >
      {name}
    </button>
  )
}
