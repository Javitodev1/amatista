<script lang="ts">
  import { onMount } from 'svelte'
  import { querystring } from 'svelte-spa-router'
  import { filters, Categories } from '../data/filters'
  import { fetchProducts } from '@/libs/graphql'
  import FilterItem from './components/FilterItem.svelte'
  import ProductCard from './components/ProductCard.svelte'
  import type { PageInfo } from '../types/wp-response'
  import type { Product } from '../types/product'

  enum PageStatus {
    LOADING,
    READY,
    ERROR,
    INIT,
  }

  $: urlSearch = new URLSearchParams($querystring)
  $: filter = urlSearch.get('filter') ?? Categories.ALL

  $: currentProducts = [] as Product[]
  $: currentPageInfo = {
    endCursor: "",
    hasNextPage: false,
  } as PageInfo
  $: pageState = PageStatus.INIT

  onMount( async () => {
    pageState = PageStatus.LOADING
    fetchProducts(filter, currentPageInfo.endCursor)
      .then(({products, pageInfo}) => {
        currentProducts = products
        currentPageInfo = pageInfo
        pageState = PageStatus.READY
      })
  })

  const handleHashchange = () => {
    pageState = PageStatus.LOADING
    fetchProducts(filter, currentPageInfo.endCursor)
      .then(({products, pageInfo}) => {
        currentProducts = products
        currentPageInfo = pageInfo
        pageState = PageStatus.READY
      })
  }
</script>

<svelte:window on:hashchange={handleHashchange} />

<div class="dark:bg-dark-primary min-h-screen">
  <section class="md:max-w-6xl mx-auto py-8 overflow-x-auto">
    <ul class="flex gap-8 justify-center min-w-fit px-12 sm:px-0">
      {#each filters as { name, id } (id)}
        <FilterItem
          {id}
          activeFilter={filter}>{name}</FilterItem
        >
      {/each}
    </ul>
  </section>

  <section class="max-w-6xl mx-auto">
    <ul class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3">
      {#if pageState === PageStatus.LOADING}
        <p>Cargando...</p>
      {:else if pageState === PageStatus.READY}
        {#each currentProducts as product (product.id)}
          <ProductCard {product} />
        {/each}
      {:else}
        <p>Server not available</p>
      {/if}
    </ul>
  </section>
</div>

