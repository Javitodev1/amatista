const formatter = new Intl.NumberFormat("es-UY", {
  style: "currency",
  currency: "UYU",
  maximumFractionDigits: 0,
})

const formatCurreny = (price: number) => {
  return formatter.format(price)
}

export default formatCurreny
