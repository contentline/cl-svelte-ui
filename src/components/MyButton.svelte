<script>
  import { onMount } from 'svelte';
  import Code from './common/CodeBlock.html'

  export let buttonText
  export let code = `

    import Button from 'ui/Button'
    export let buttonText = '123'

    <Button>{buttonText}</Button>
  `
</script>
<div>
  <button on:click>{buttonText}</button>
  <Code>{code}</Code>
</div>
