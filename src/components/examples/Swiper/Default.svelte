<script>
  import Code from '../../common/CodeBlock.svelte'
  import Swiper from '../../Swiper.svelte'
  import CodeText from './code'
  import { onMount } from 'svelte'
  export let swiperElem

  onMount(() => console.log('swiper elem', swiperElem))

</script>
<style>
    .swiper-slide {
      max-width: 250px;
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
    .swiper-slide img {
      max-height: 250px;
      border-radius: 20px;
      object-fit: cover;
      width: 100%;
    }
</style>
<div>
  <Swiper bind:this={swiperElem} options={{ slidesPerView: 1, spaceBetween: 10, lazy: true }}>
  <div class="swiper-slide"><img src='/images/1.jpg' alt="image" /></div>
  <div class="swiper-slide"><img src='/images/2.jpg' alt="image" /></div>
  <div class="swiper-slide"><img src='/images/3.jpg' alt="image" /></div>
  <div class="swiper-slide"><img src='/images/4.jpg' alt="image" /></div>
</Swiper>
  <Code>{CodeText}</Code>
</div>
