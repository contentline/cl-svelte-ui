const code = `
<script>
  import Select from '../../Select.svelte'

  let form, data = [], toggle = false
  const firstData = [
    {
      text: 'ГБУЗ МО "Синьковская участковая больница ГБУЗ МО "Синьковская участковая больница""',
      value: 1
    },
    {
      text: 'ГБУЗ МО "Синьковская участковая больница"',
      value: 2
    },
    {
      text: 'Третий Disabled',
      value: 3,
      disabled: true
    },
  ]

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
  const toggleHandle = () => {
    data = toggle ? firstData : [ ...firstData, ...firstData ]
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
      <Select data={data} name='test' />
    </div>
    <button type='submit'>Отправить</button>
  </form>
  <button on:click={toggleHandle}>Изменить данные</button>
`

export default code