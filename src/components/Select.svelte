<script>
  import { onMount, onDestroy, createEventDispatcher, afterUpdate }  from 'svelte'
  import '../css/nice-select/nice-select.css'
  import SimpleBar from 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
  import 'simplebar/dist/simplebar.css';
  onMount(() => {
      window.addEventListener('click', closeClickHandle)
      //console.log('listElem', listElem)
      bar = new SimpleBar(listElem)
  })
  onDestroy(() => typeof window !== 'undefined' && window.removeEventListener('click', closeClickHandle))
  const dispatch = createEventDispatcher()
  let selectWrapper, listElem, bar
  export let data = [], name='', nullItem = { value: '', text: '---' }, selectedItem = nullItem, required = true

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
        <div bind:this={listElem}  style='max-height: 300px;'>
            <div class="simplebar-wrapper">
                <div class="simplebar-height-auto-observer-wrapper">
                    <div class="simplebar-height-auto-observer" />
                </div>
                <div class="simplebar-mask">
                    <div class="simplebar-offset">
                        <div class='simplebar-content-wrapper'>
                            <div class="simplebar-content">
                                <div>
                                  {#each resultData as optionItem}
                                    <li
                                            on:click={e => itemClickHandle(e, optionItem)}
                                    class="option"
                                    class:selected={selectedItem.value === optionItem.value}
                                    class:disabled={optionItem.disabled}
                                    >{optionItem.text}</li>
                                  {/each}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="simplebar-placeholder" />
            </div>
            <div className="simplebar-track simplebar-horizontal">
                <div className="simplebar-scrollbar" />
            </div>
            <div className="simplebar-track simplebar-vertical">
                <div className="simplebar-scrollbar" />
            </div>
        </div>

    </ul>

</div>

<style>
  select {
    opacity: 0!important;
    width: 0!important;
    border: 1px solid transparent!important;
  }
</style>


