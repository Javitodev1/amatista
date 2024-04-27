<script lang="ts">
  import { link } from 'svelte-spa-router'
  export let id
  export let activeFilter

  const activeCss =
    activeFilter === id
      ? 'text-amatista after:w-full'
      : 'text-black after:w-0'
</script>

<li>
  <a
    href="/?filter={id}"
    use:link
    class="{activeCss} relative after:transition-[width] after:duration-300 after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:bg-amatista hover:after:w-full hover:text-amatista"
    ><slot /></a
  >
</li>
