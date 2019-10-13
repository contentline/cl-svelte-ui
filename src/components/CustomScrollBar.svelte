<script>
  import { onMount } from 'svelte'
  import SimpleBarJS from 'simplebar';
  import 'simplebar/dist/simplebar.css';
  onMount(() => {
    bar = new SimpleBarJS(scrollElem, options)
  })
  export let options = {}, bar, maxHeight = 300
    let scrollElem
</script>

<div bind:this={scrollElem}  style={`max-height: ${maxHeight}px;`}>
  <div class="simplebar-wrapper">
    <div class="simplebar-height-auto-observer-wrapper">
      <div class="simplebar-height-auto-observer" />
    </div>
    <div class="simplebar-mask">
      <div class="simplebar-offset">
        <div class='simplebar-content-wrapper'>
          <div class="simplebar-content">
            <slot />
          </div>
        </div>
      </div>
    </div>
    <div class="simplebar-placeholder" />
  </div>
  <div className="simplebar-track simplebar-horizontal">
    <div className="simplebar-scrollbar" />
  </div>
  <div className="simplebar-track simplebar-vertical">
    <div className="simplebar-scrollbar" />
  </div>
</div>
