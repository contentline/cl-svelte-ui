<script>
  import Code from '../../common/CodeBlock.svelte'
  import Select from '../../Select.svelte'
  import CodeText from './code'
  import { onMount } from 'svelte'
  let form, data = [], toggle = false, selectElem, customScrollObject

  onMount(() => console.log('customScrollObject', customScrollObject))
  const submitHandle = async e => {
    e.preventDefault()
    const body = new FormData(form)
    console.log(body.get('test'))
    const res = await fetch('/data', {
      method: 'POST',
      body
    })

    const json = JSON.parse(res.responseText)
  }
  const createData = number => Array.from({ length: number }).map((item, index) => ({ text: index + 1, value: index }))
  const toggleHandle = () => {
    data = createData(toggle ? 5 : 10)
    toggle = !toggle
  }
</script>

<style>
  .wrapper {
    max-width: 300px;
    margin: auto;
  }

</style>

  <form on:submit={submitHandle} bind:this={form}>
    <div class='wrapper'>
      <Select bind:this={selectElem} bind:customScrollElem={customScrollObject} data={data} name='test' customScroll={true} customScrollOptions={{autoHide: false}} />
    </div>
    <button type='submit'>Отправить</button>
  </form>
  <button on:click={toggleHandle}>Изменить данные</button>
  <Code>{CodeText}</Code>

