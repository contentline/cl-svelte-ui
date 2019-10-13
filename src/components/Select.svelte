<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import '../css/nice-select/nice-select.css'
  import CustomScrollBar from "./CustomScrollBar.svelte";

  onMount(() => {
    window.addEventListener('click', closeClickHandle)
  })
  onDestroy(() => typeof window !== 'undefined' && window.removeEventListener('click', closeClickHandle))
  const dispatch = createEventDispatcher()
  let selectWrapper, listElem
  export let data = [],
    name = '',
    nullItem = {value: '', text: '---'},
    selectedItem = nullItem,
    required = true,
    customScroll = false,
    customScrollOptions = {},
    customScrollElem

  const defaultSelectedItem = selectedItem

  export let reset = () => selectedItem = defaultSelectedItem

  let show = false
  const invalidHandle = e => dispatch('invalid', e)
  const itemClickHandle = (e, dataItem) => {
    e.stopPropagation()
    if (dataItem.disabled) {
      return
    }
    selectedItem = dataItem
    show = false
    dispatch('change', selectedItem)
  }
  const toggleClickHandle = e => show = !show

  const closeClickHandle = e => {
    if (!selectWrapper.contains(e.target)) {
      show = false
    }
  }
  const updateResultData = () => {
    reset()
    return [ nullItem, ...data ]
  }
  $: resultData = data && data.length && updateResultData()
</script>


<div class="nice-select wide" tabindex="0" class:open={show} on:click={toggleClickHandle} bind:this={selectWrapper}>
  <select value={selectedItem.value} {name} {required} on:invalid={invalidHandle}>
    {#each resultData as { value, text }, index}
      <option {value}>{text}</option>
    {/each}
  </select>
  <span class="current">{selectedItem.text}</span>
    <div class="list" class:defaultScroll={!customScroll}>
      {#if customScroll}
        <CustomScrollBar bind:bar={customScrollElem} options={customScrollOptions}>
          <ul>
            {#each resultData as optionItem}
              <li
                on:click={e => itemClickHandle(e, optionItem)}
              class="option"
              class:selected={selectedItem.value === optionItem.value}
              class:disabled={optionItem.disabled}
              >{optionItem.text}</li>
            {/each}
          </ul>
        </CustomScrollBar>
        {:else}
          <ul>
            {#each resultData as optionItem}
              <li
                on:click={e => itemClickHandle(e, optionItem)}
              class="option"
              class:selected={selectedItem.value === optionItem.value}
              class:disabled={optionItem.disabled}
              >{optionItem.text}</li>
            {/each}
          </ul>
      {/if}
    </div>
</div>

<style>
  select {
    opacity: 0!important;
    width: 0!important;
    border: 1px solid transparent!important;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  .list.defaultScroll {
    overflow: auto;
    max-height: 300px;
  }
  .list .option {
    white-space: normal;
  }
</style>


