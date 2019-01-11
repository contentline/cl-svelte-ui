<script>
  import Code from './common/CodeBlock.html'

  export let buttonText
  export let code = `

    import Button from 'ui/Button'
    export let buttonText = 'Custom Text'
    export let rounded = true

    <Button class:rounded="rounded">{buttonText}</Button>
  `
  const a = () => {}
</script>
<div>
  <button on:click class:rounded="{rounded}">{buttonText}</button>
  <Code>{code}</Code>
</div>
