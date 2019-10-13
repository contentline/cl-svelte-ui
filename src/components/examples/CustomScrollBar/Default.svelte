<script>
  import CustomScrollBar from '../../CustomScrollBar.svelte'

  const data = Array.from({ length: 50 }).map((item, index) => ({ text: `Line number: ${index + 1}`}))
</script>

<style>
  .container {
    max-height: 600px;
    max-width: 400px;
    display: flex;
  }
  @media(max-width: 500px) {
    .container {
      max-height: 100%;
    }
  }
</style>

<div class="container">
  <CustomScrollBar>
    <ul class="list">
      {#each data as { text }}
        <li class="list-item">{text}</li>
      {/each}
    </ul>
  </CustomScrollBar>
</div>


