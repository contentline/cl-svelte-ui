<script>
  import Code from '../../common/CodeBlock.svelte'
  import Swiper from '../../Swiper.svelte'
  import CodeText from './code'
  import { onMount } from 'svelte'
  export let swiperElem
  let thumbGalleryElem, galleryTop = null
  onMount(() => {
    console.log('thumbGalleryElem', thumbGalleryElem.api)
    galleryTop = {
      lazy: true,
      spaceBetween: 10,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: thumbGalleryElem.api,
      },
    }
  })
  const thumbGallery = {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  }

</script>

<style>

  .swiper-slide img {
    max-height: 250px;
    border-radius: 20px;
    object-fit: cover;
    width: 100%;
  }
</style>

<div>
  <Swiper bind:this={thumbGalleryElem} options={thumbGallery}>
    <div class="swiper-slide"><img src='/images/1.jpg' alt="image" /></div>
    <div class="swiper-slide"><img src='/images/2.jpg' alt="image" /></div>
    <div class="swiper-slide"><img src='/images/3.jpg' alt="image" /></div>
    <div class="swiper-slide"><img src='/images/4.jpg' alt="image" /></div>
    <div class="swiper-slide"><img src='/images/1.jpg' alt="image" /></div>
    <div class="swiper-slide"><img src='/images/2.jpg' alt="image" /></div>
    <div class="swiper-slide"><img src='/images/3.jpg' alt="image" /></div>
    <div class="swiper-slide"><img src='/images/4.jpg' alt="image" /></div>
  </Swiper>
  {#if galleryTop}
    <Swiper bind:this={swiperElem} options={galleryTop}>
      <div class="swiper-slide"><img src='/images/1.jpg' alt="image" /></div>
      <div class="swiper-slide"><img src='/images/2.jpg' alt="image" /></div>
      <div class="swiper-slide"><img src='/images/3.jpg' alt="image" /></div>
      <div class="swiper-slide"><img src='/images/4.jpg' alt="image" /></div>
      <div class="swiper-slide"><img src='/images/1.jpg' alt="image" /></div>
      <div class="swiper-slide"><img src='/images/2.jpg' alt="image" /></div>
      <div class="swiper-slide"><img src='/images/3.jpg' alt="image" /></div>
      <div class="swiper-slide"><img src='/images/4.jpg' alt="image" /></div>
    </Swiper>
  {/if}


  <Code>{CodeText}</Code>
</div>