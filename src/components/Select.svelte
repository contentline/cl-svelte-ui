<script>
  import { onMount, onDestroy, createEventDispatcher }  from 'svelte'
  import '../css/nice-select/nice-select.css'

  onMount(() => window.addEventListener('click', closeClickHandle))
  onDestroy(() => window.removeEventListener('click', closeClickHandle))

  const dispatch = createEventDispatcher()
  let selectWrapper
  export let data = [], name='', nullItem = { value: '', text: '---' }, selectedItem = nullItem, required = true

  const defaultSelectedItem = selectedItem

  export let reset = () => selectedItem = defaultSelectedItem

  let show = false
  const invalidHandle = e => dispatch('invalid', e)
  const itemClickHandle = (e, dataItem) => {
    console.log('dataItem', dataItem)
    e.stopPropagation()
    if (dataItem.disabled) {
      return
    }
    selectedItem = dataItem
    show = false
    dispatch('change', selectedItem)
  }
  const toggleClickHandle = e => {
    show = !show
  }

  const closeClickHandle = e => {
    if (!selectWrapper.contains(e.target)) {
      show = false
    }
  }
  $: resultData = [ nullItem, ...data ]
</script>



<div class="nice-select wide" tabindex="0" class:open={show} on:click={toggleClickHandle} bind:this={selectWrapper}>
  <select value={selectedItem.value} {name} {required} on:invalid={invalidHandle}>
    {#each resultData as { value, text }, index}
      <option {value}>{text}</option>
    {/each}
  </select>
  <span class="current">{selectedItem.text}</span>
  <ul class="list">
    {#each resultData as optionItem}
      <li
        on:click={e => itemClickHandle(e, optionItem)}
        class="option"
        class:selected={selectedItem.value === optionItem.value}
        class:disabled={optionItem.disabled}
      >{optionItem.text}</li>
    {/each}
  </ul>
</div>

<style>
  select {
    opacity: 0!important;
    width: 0!important;
    border: 1px solid transparent!important;
  }
</style>


