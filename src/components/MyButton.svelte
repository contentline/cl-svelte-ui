<script>
  import { onMount } from 'svelte';
  let count = 2
  export let rounded
  export let buttonText
  const handler = () => count = count + 1
  onMount(() => {
    console.log(rounded, buttonText)
  })
</script>
<button on:click>{buttonText}</button>
<p>{rounded ? 'rounded' : 'false'}</p>
<p>{count}</p>