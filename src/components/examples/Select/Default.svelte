<script>
  import Code from '../../common/CodeBlock.svelte'
  import Select from '../../Select.svelte'
  export let code = `
    <script\>
      import { Select } from 'cl-svelte-ui'

        const data = [
          {
            text: 'Первый',
            value: 1
          },
          {
            text: 'Второй',
            value: 2
          },
          {
            text: 'Третий Disabled',
            value: 3,
            disabled: true
          }
        ]
    </script\>
    <style>

    </style>

    <div class='wrapper'>
      <Select {data}/>
    </div>
  `
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
    }
  ]
  const secondData = [
    {
      text: 'test',
      value: 1
    },
    {
      text: 'test',
      value: 2
    },
    {
      text: 'test Disabled',
      value: 3,
      disabled: true
    }
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
    data = toggle ? firstData : secondData
    toggle = !toggle
  }
</script>

<style>
  .wrapper {
    max-width: 300px;
    margin: auto;
  }
</style>

  <p>data: {JSON.stringify(data)}<p>
<form on:submit={submitHandle} bind:this={form}>
  <div class='wrapper'>
    <Select {data} name='test' />
  </div>
  <button type='submit'>Отправить</button>
</form>
  <button on:click={toggleHandle}>Изменить данные</button>

<Code>{code}</Code>
