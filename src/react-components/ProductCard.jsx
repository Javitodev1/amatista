import formatCurency from '@/utils/currency'

export default function ProductCard({ title, price, imageUrl, stock, href }) {
  const priceFormatted = formatCurency(price)
  const isSoldout = stock < 1 || !stock
  href = '/tienda/producto'
  return (
    <a
      href={href}
      className="inline-block group"
    >
      <div className="relative mb-4 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="duration-1000 group-hover:scale-110"
        />
        {isSoldout && (
          <span className="absolute px-3 py-1 text-sm rounded-full bottom-3 left-3 text-raw_white bg-midnight_green-900">
            Agotado
          </span>
        )}
      </div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <p>{priceFormatted}</p>
    </a>
  )
}
