<script lang="ts">
  import { link } from 'svelte-spa-router'
  import type { Product } from '../../types/product'

  export let product: Product

  const { id, title, price, stock } = product
  const { url: src, width, height } = product.thumbnail
</script>

<li
  class="p-6 transition-colors duration-300 border-2 border-transparent hover:border-white group"
>
  <a
    href="/{id}"
    use:link
  >
    <div
      class="w-full h-auto mb-2 overflow-hidden aspect-square"
    >
      <img
        {src}
        {width}
        {height}
        alt={id}
        class="object-center w-auto h-full mx-auto transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <h3>{title}</h3>
    <p>{price}</p>
    <p>{stock}</p>
  </a>
</li>
