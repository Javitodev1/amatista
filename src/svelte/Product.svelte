<script lang="ts">
  import Typographi from './components/Typographi.svelte'
  import WspButton from './components/WspButton.svelte'
  import StockBadge from './components/StockBadge.svelte'
  import { formatCurreny } from '@/utils/currency'
  import { fetchProudctById } from '../libs/graphql'
  import ProductSlider from './components/ProductSlider.svelte'

  interface Params {
    id: string
  }

  export let params = {} as Params
  const { id } = params

  const productURL = window.location.href
  const hrefWsp = `https://api.whatsapp.com/send?phone=59896667633&text=Quiero este producto: ${productURL}`
</script>

<div class="dark:bg-dark-primary py-12">
  {#await fetchProudctById(id)}
    <Typographi as={'p'} variant={'BODY'} color={'BLACK'} darkColor={'WHITE'}>cargando...</Typographi>
  {:then product}
    {#if !product}
      <Typographi as={'p'} variant={'BODY'} color={'BLACK'} darkColor={'WHITE'}>Producto no encontrado</Typographi>
    {:else}
      <section class="max-w-6xl mx-auto">
        <div class="grid sm:grid-cols-10">
          <div class="sm:col-span-5">
            <ProductSlider images={product.images} />
          </div>
  
          <div class="sm:col-span-5">
            <Typographi as={'h2'} variant={'TITLE'} color={'ACCENT_AMATISTA'}>{product.title}</Typographi>
            <Typographi as={'h3'} variant={'SUBTITLE'} color={'BLACK'} darkColor={'WHITE'} className={'mb-4'}>{formatCurreny(product.price)}</Typographi>
            {#each product.categories as category}
              <Typographi as={'h3'} variant={'SUBTITLE'} color={'BLACK'} darkColor={'WHITE'}>{category}</Typographi>
            {/each}

            <StockBadge isInStock={product.isInStock}/>
            <Typographi as={'p'} variant={'BODY'} color={'BLACK'} darkColor={'WHITE'}>{@html product.description}</Typographi>
            {#if product.stockQuantity > 0}
              <Typographi as={'p'} variant={'BODY'} color={'BLACK'} darkColor={'WHITE'}>Unidades disponibles: {product.stockQuantity}</Typographi>
            {/if}

            <div>
              <WspButton href={hrefWsp}/>
            </div>
          </div>
        </div>
      </section>
    {/if}
  {:catch}
    <p>Server not available</p>
  {/await}
</div>
