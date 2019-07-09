<script>
  import Code from '../../common/CodeBlock.svelte'
  import Swiper from '../../Swiper.svelte'
  import { onMount } from 'svelte'
  export let swiperElem
  export let count
  export let code = `
      <script\>
        import { Swiper } from 'cl-svelte-ui'
        import { onMount } from 'svelte'
        export let swiperElem
        export let count
        onMount(() => setTimeout(() => count = swiperElem.api.slides.length))
      </script\>
      <style\>
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;
          /* Center slide text vertically */
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
        }
      </style\>
    <Swiper bind:this={swiperElem}>
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
    </Swiper>
  `
  //
  onMount(() => setTimeout(() => count = swiperElem.api.slides.length))

</script>
<style>
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
</style>
<div>
  <Swiper bind:this={swiperElem}>
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    <div class="swiper-slide">Slide 4</div>
    <div class="swiper-slide">Slide 5</div>
  </Swiper>
  <p>Count Slides: {count || 0}</p>
  <Code>{code}</Code>
</div>
