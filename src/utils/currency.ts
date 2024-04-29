const formatter = new Intl.NumberFormat("es-UY", {
  style: "currency",
  currency: "UYU",
  maximumFractionDigits: 0,
})

export function formatCurreny(price: number) {
  return formatter.format(price)
}

