<script lang="ts">
  import Typographi from './Typographi.svelte'
  import StockBadge from './StockBadge.svelte'
  import { link } from 'svelte-spa-router'
  import type { Product } from '../../types/product'
  import { formatCurreny } from '../../utils/currency'

  export let product: Product

  const { id, title, price, isInStock } = product
  const { url: src, width, height } = product.thumbnail

  const outStockImgCss = !isInStock ? 'grayscale' : ''
</script>

<li
  class="relative p-6 transition-colors duration-300 border-2 border-transparent hover:border-amatista group"
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
        class="object-center w-auto h-full mx-auto transition-transform duration-500 group-hover:scale-105 {outStockImgCss}"
      />
    </div>
    <Typographi as='h3' variant={'SUBTITLE'} color={'BLACK'} darkColor={'WHITE'} className={'group-hover:text-amatista transition-colors duration-200'}>{title}</Typographi>
    <Typographi as='p' variant={'BODY'} color={'BLACK'} darkColor={'WHITE'}>{formatCurreny(price)}</Typographi>
    <StockBadge {isInStock} variant={'JUST_OUT_STOCK'} />
  </a>
</li>
