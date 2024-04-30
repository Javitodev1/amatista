<script lang="ts">
  import type { ProductImage } from '../../types/product'
  import { NOT_FOUND_IMG_SRC } from '../errs/image'

  const defaultImg = {
    url: "",
    id: "",
    width: 0,
    height: 0,
  }

  export let images: ProductImage[]

  let activeIndex = 0
  $: activeImage = images[activeIndex] ?? defaultImg

  const handleMousemove = (event: MouseEvent) => {
    const { x, y } = event
    const parent = event.target as HTMLImageElement
    parent.style.transformOrigin = `${x}px ${y}px`
  }
</script>

<div class="grid h-full w-auto aspect-portrait-3-4 grid-cols-3 grid-rows-4 gap-x-2 max-h-[90vh]">
  <div
    class="w-full h-auto col-span-3 row-span-3 aspect-square overflow-hidden"
  >
    <img
      src={activeImage.url}
      alt={activeImage.id}
      width={activeImage.width}
      height={activeImage.height}
      class="h-full w-auto mx-auto object-center hover:scale-[2]"
      on:mousemove={handleMousemove}
      on:error={() => activeImage = { ...activeImage, url: NOT_FOUND_IMG_SRC}}
    />
  </div>
  {#each images as { height, id, url, width }, index (index)}
    <button
      class="w-full h-auto aspect-square border-[2px] border-transparent hover:border-amatista hover:cursor-default"
      on:mouseover={() => {
        activeIndex = index
      }}
      on:focus={() => {
        activeIndex = index
      }}
    >
      <img
        class="object-center w-auto h-full mx-auto"
        src={url}
        alt={id}
        {height}
        {width}
        on:error={() => url = NOT_FOUND_IMG_SRC}
      />
    </button>
  {/each}
</div>
