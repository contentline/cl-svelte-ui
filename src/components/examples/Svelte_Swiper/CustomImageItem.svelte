<script>
  import Code from '../../common/CodeBlock.svelte'
  import SvelteSwiper from '../../SvelteSwiper.svelte'
</script>

<div class="wrapper">
  <SvelteSwiper {options} items={swiperItems} let:item>
    <img src={item.src} alt={item.alt} slot="targetItem" />
  </SvelteSwiper>
</div>
