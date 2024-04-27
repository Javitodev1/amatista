<script lang="ts">
  import { fetchProudctById } from '../libs/graphql'
  import ProductSlider from './components/ProductSlider.svelte'

  interface Params {
    id: string
  }

  export let params = {} as Params
  const { id } = params
</script>

{#await fetchProudctById(id)}
  <p>loading...</p>
{:then product}
  {#if !product}
    <p>Producto no encontrado</p>
  {:else}
    <section class="max-w-6xl mx-auto">
      <div class="grid sm:grid-cols-10">
        <div class="sm:col-span-5">
          <ProductSlider images={product.images} />
        </div>

        <div class="sm:col-span-5">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.stock}</p>
        </div>
      </div>
    </section>
  {/if}
{:catch}
  <p>Server not available</p>
{/await}
