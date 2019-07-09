<script>
  import SvelteSwiper from '../../SvelteSwiper.svelte'
  import Image from '../../Image.svelte'
  import Code from '../../common/CodeBlock.svelte'


  const options = {
    perView: 'auto',
    step: 0,
    margin: 10,
    media: {
      768 : {
        perView: 1,
        margin: 0,
        arrows: false
      },
      769: {
        perView: 'auto',
        margin: 10
      }
    }
  }

  const swiperItems = [
        {
          src: '/images/1.jpg',
          alt: 'Изображение 1',
          id: 0
        },
        {
          src: '/images/2.jpg',
          alt: 'Изображение 2',
          id: 1
        },
        {
          src: '/images/3.jpg',
          alt: 'Изображение 3',
          id: 2
        }
  ]

  const clickHandle = data => {
    console.log(data.detail)
  }


  const code = `
    <script\>
      import { SvelteSwiper } from 'cl-svelte-ui'
      const options = {
        perView: 'auto',
        step: 0,
        margin: 10,
        media: {
          768 : {
            perView: 1,
            margin: 0,
            arrows: false
          },
          769: {
            perView: 'auto',
            margin: 10
          }
        }
      }

      const swiperItems = [
        {
          src: '/images/1.jpg',
          alt: 'Изображение 1'
        },
        {
          src: '/images/2.jpg',
          alt: 'Изображение 2'
        },
        {
          src: '/images/3.jpg',
          alt: 'Изображение 3'
        },
        {
          src: '/images/4.jpg',
          alt: 'Изображение 4'
        },
        {
          src: '/images/1.jpg',
          alt: 'Изображение 1'
        },
        {
          src: '/images/2.jpg',
          alt: 'Изображение 2'
        },
        {
          src: '/images/3.jpg',
          alt: 'Изображение 3'
        },
        {
          src: '/images/4.jpg',
          alt: 'Изображение 4'
        },
        {
          src: '/images/1.jpg',
          alt: 'Изображение 1'
        },
        {
          src: '/images/2.jpg',
          alt: 'Изображение 2'
        },
        {
          src: '/images/3.jpg',
          alt: 'Изображение 3'
        },
        {
          src: '/images/4.jpg',
          alt: 'Изображение 4'
        }
      ]
    </script\>
    <style>
      :global(.item-container .svelte-image_item) {
        height: 100%!important;
        border-radius: 5px;
        object-fit: cover!important;
      }
      :global(.item-container) {
        height: 250px!important;
        margin-right: 10px;
      }
      .wrapper {
        max-width: 800px;
        height: 250px;
        position: relative;
      }
    </style>

    <div class="wrapper">
      <SvelteSwiper {options} items={swiperItems} on:click={clickHandle} />
    </div>
  `
</script>

<style>
  :global(.item-container .svelte-image_item) {
    height: 100%!important;
    border-radius: 5px;
    object-fit: cover!important;
  }
  :global(.item-container) {
    height: 250px;
    margin-right: 10px;
  }
  .wrapper {
    max-width: 400px;
    height: 250px;
    position: relative;
  }
</style>

<div>
  <div class="wrapper">
    <SvelteSwiper {options} items={swiperItems} on:click={clickHandle} />
  </div>
  <Code>{code}</Code>
</div>


