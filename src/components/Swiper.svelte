<script>
  import { onMount, onDestroy } from 'svelte'
  import SwiperComponent from 'swiper'
  import '../css/swiper/swiper.min.css'

  export let api, container, containerClass = "", wrapperClass = "", options = {}

  onMount(() => {
    console.log('options', options)
    api = new SwiperComponent(container, options)
  })

  onDestroy(() => {
    try {
      api && api.destroy()
    } catch (e) {
      console.error(e)
    }
  })

  export const getApi = () => api
  export const update = () => api.update()
  
</script>
<style>
  .swiper-container {
    height: 100%;
    width: 100%;
  }
</style>

<svelte:options accessors={true} />

<!-- Slider main container -->
  <div class="swiper-container {containerClass}" bind:this={container} id="target">
    <div class="swiper-wrapper {wrapperClass}">
      <slot></slot>
    </div>
    <slot name="pagination"></slot>
    <slot name="slide-prev"></slot>
    <slot name="slide-next"></slot>
  </div>
