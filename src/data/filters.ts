import { ProductTag } from "@/types/api"

export const filters = {
  Todo: {tag: ProductTag.Todo, display: 'Todo'},
  Gangas: {tag: ProductTag.Gangas, display: 'Gangas'},
  Abrigos: {tag: ProductTag.Abrigos, display: 'Abrigos'},
  Shorts_y_Pantalones: {tag: ProductTag.Shorts_y_Pantalones, display: 'Shorts & Pantalones'},
  Vestidos_y_Polleras: {tag: ProductTag.Vestidos_y_Polleras, display: 'Vestidos & Polleras'},
  Accesorios_y_Calzado: {tag: ProductTag.Accesorios_y_Calzado, display: 'Accesorios & Calzado'},
  Blusas_y_Camisas: {tag: ProductTag.Blusas_y_Camisas, display: 'Blusas & Camisas'},
}