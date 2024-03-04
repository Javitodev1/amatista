export enum ProductSize {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
  T34 = "34",
  T35 = "35",
  T36 = "36",
  T37 = "37",
  T38 = "38",
  T39 = "39",
  T40 = "40",
  T41 = "41",
  T42 = "42",
  T43 = "43",
}

export enum ProductTag {
  Todo = "Todo",
  Gangas = "Gangas",
  Abrigos = "Abrigos",
  Shorts_y_Pantalones = "Shorts y Pantalones",
  Vestidos_y_Poleras = "Vestidos y Poleras",
  Accesorios_y_Calzado = "Accesorios y Calzado",
  Tejido_Artesanal = "Tejido Artesanal",
}

export interface Image {
  url: string
}

export interface Product {
  id: number
  size: ProductSize
  tag: ProductTag[]
  title: string
  price: number
  stock: number
  description: string
  frontImg: Image
  backImg: Image
}