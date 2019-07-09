<script>
  import PreloadIcon from '../../public/images/preloadImage.svg'
  export let alt = 'image description',
  src='',
  showPreload = true,
  preloadIcon = PreloadIcon,
  svelteImageClassName = '',
  svelteImageItemClassName = '',
  fixedHeight= false,
  errorText = '',
  loadHandle,
  errorHandle

  let imageElement, showError = false

  const imageLoadHandle = e => {
    showPreload = false
    loadHandle && loadHandle(e)
  }

  const imageErrorHandle = e => {
    showPreload = false
    showError = true
    errorHandle && errorHandle(e)
  }
</script>

<div class='svelte-image {svelteImageClassName}' class:fixedHeight={fixedHeight}>
  <div class="svelte-image_preloader svelte-image__transition" class:show={showPreload}>
    <img class='svelte-image_preloader-item' src={preloadIcon} alt="preloader" />
  </div>
  <div class="svelte-image_error svelte-image__transition" class:show={showError}>{errorText}</div>
  <div class="svelte-image_item-container svelte-image__transition" class:show={!showPreload}>
    <img class='svelte-image_item {svelteImageItemClassName}' on:load={imageLoadHandle} on:error={imageErrorHandle} {alt} {src} />
    <slot name="description"></slot>
  </div>
</div>

<style>

  .svelte-image {
    padding-top: 56.25%;
    position: relative;
  }

  .svelte-image.fixedHeight {
    padding-top: initial;
    height: 100%;
  }

  .svelte-image.fixedHeight .svelte-image_item-container {
    position: relative;
  }

  .svelte-image.fixedHeight .svelte-image_item {
    position: relative;
    width: auto;
  }

  .svelte-image_preloader,
  .svelte-image_error
   {
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .svelte-image_preloader.show,
  .svelte-image_error.show,
  .svelte-image_item-container.show
   {
    opacity: 1;
   }

   .svelte-image_error,
   .svelte-image_preloader,
   .svelte-image_item-container
   {
    opacity: 0
   }


  .svelte-image__transition {
    transition: opacity 0.3s;
  }

  .svelte-image_preloader-item {
    width: 50px;
  }

  .svelte-image_preloader {
    z-index: 1;
  }

  .svelte-image_error {
    z-index: 2;
  }

  .svelte-image_preloader,
  .svelte-image_error
   {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .svelte-image_item-container, .svelte-image_item {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

</style>

