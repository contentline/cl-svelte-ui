<script>
  import { onMount, onDestroy, createEventDispatcher }  from 'svelte'
  import '../css/nice-select/nice-select.css'

  onMount(() => window.addEventListener('click', closeClickHandle))
  onDestroy(() => window.removeEventListener('click', closeClickHandle))

  const dispatch = createEventDispatcher()

  export let data = [], name='', nullItem = { value: 0, text: '---' }, selectedItem = nullItem, required = true

  const defaultSelectedItem = selectedItem

  export let reset = () => selectedItem = defaultSelectedItem

  let show = false

  const itemClickHandle = dataItem => e => {
    e.stopPropagation()
    if (dataItem.disabled) {
      return
    }
    selectedItem = dataItem
    show = false
    dispatch('change', selectedItem)
  }
  const toggleClickHandle = e => {
    e.stopPropagation()
    show = !show
  }
  const closeClickHandle = e => show = false
  $: resultData = [ nullItem, ...data ]
</script>



<div class="nice-select wide" tabindex="0" class:open={show} on:click={toggleClickHandle}>
  <select style='display: none' value={selectedItem.value} {name} {required}>
    {#each resultData as { value, text }}, index}
      <option {value}>{text}</option>
    {/each}
  </select>
  <span class="current">{selectedItem.text}</span>
  <ul class="list">
    {#each resultData as optionItem}
      <li
        on:click={itemClickHandle(optionItem)}
        class="option"
        class:selected={selectedItem.value === optionItem.value}
        class:disabled={optionItem.disabled}
      >{optionItem.text}</li>
    {/each}
  </ul>
</div>


