<script>
  let visible = false

  function heightAnim(node, { speed = 300 }) {
    const nodeHeight = node.getBoundingClientRect().height
    return {
      duration: speed,
      tick: t => {
        node.style.height = t * nodeHeight + 'px'
      }
    }
  }
  const visibleToggleHandle = () => (visible = !visible)
</script>

<style>
  .vertical-slider_item {
    overflow: hidden;
  }
  .title-container {
    cursor: pointer;
  }
  .arrow-container {
    font-size: 16px;
  }

  .arrow-container:hover .arrow {
    border-color: #00adbe;
  }

  .wrap-arrow {
    max-width: 30px;
    width: 100%;
    height: 30px;
    border: 2px solid #00adbe;
    margin-right: 30px;
  }

  .d-flex {
    display: flex
  }

  .align-items-center {
    align-items: center;
  }

  .mb-3 {
    margin-bottom: 20px;
  }

  .mt-3 {
    margin-top: 20px;
  }

  .justify-content-center {
    justify-content: center;
  }

  .arrow {
    transition: transform 0.6s;
    will-change: transform;
    width: 5px;
    height: 5px;
    border-right: 2px solid #41545c;
    border-bottom: 2px solid #41545c;
    transform: rotate(45deg);
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .arrow-down {
    transform: rotate(225deg);
  }
</style>

<div class="title-container" on:click={visibleToggleHandle}>

  <div class="arrow-container d-flex align-items-center mb-3 mt-3">
    <div class="wrap-arrow d-flex justify-content-center align-items-center">
      <div class="arrow" class:arrow-down={visible} />
    </div>

    <div>
      <slot name="title" />
    </div>
  </div>
</div>

{#if visible}
  <div class="vertical-slider_item" in:heightAnim out:heightAnim>
    <slot name="body" />
  </div>
{/if}
