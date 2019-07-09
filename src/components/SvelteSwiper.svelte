<script>
  import Hammerjs from 'hammerjs'
  import { onMount, onDestroy, afterUpdate, createEventDispatcher } from 'svelte'
  import Image from './Image.svelte'
  import Arrow from '../../public/images/arrow.svg'

  export let options = {}, items = []
  options = {
    perView: 1,
    step: 0,
    arrows: true,
    infinity: false,
    swipe: true,
    margin: 0,
    ...options
  }

  onMount(() => {
    containerElem.addEventListener('transitionend', animationEndHandle)
    window.addEventListener('resize', resizeHandle)

    geenerateStepsGrid()

    setSwiperElemsWidth()

    resizeHandle()

    if (options.swipe) {
      hammertime = new Hammerjs(containerElem)
      hammertime.on('panleft panright', swipeHandle)
      hammertime.on('panend', panEndHandle)
      hammertime.on('panstart', panStartHandle)
      hammertime.on('tap', tapHandle)
    }
  })


  afterUpdate(() => {
    // непонятно почему неверно определяет ширину элемента если использовать bind:offsetWidth
    // поэтому это здесь
    itemContainerWidth = (itemContainerElem && itemContainerElem.getBoundingClientRect().width) || 0
  })

  onDestroy(() => {
    containerElem.removeEventListener('transitionend', animationEndHandle)
    window.removeEventListener('resize', resizeHandle)
    hammertime.destroy()
  })

  const dispatch = createEventDispatcher()

  let
  containerElem,
  wrapperElem,
  containerWidth = 0,
  currentStep = 0,
  itemContainerWidth = 0,
  itemContainerElem = null,
  clickedItem,
  showPrevArrow = false,
  showNextArrow = false,
  disableChangeStep = false,
  hammertime,
  panActive = false,
  stepsGrid = {},
  allSteps = 0

  const animationEndHandle = () => {
    disableChangeStep = false
    checkShowArrows()
  }

  const swipeHandle = e => {
    containerElem.style.transform = `translateX(${left + e.deltaX}px)`
  }

  const resizeHandle = () => {
    containerWidth = (wrapperElem && wrapperElem.getBoundingClientRect().width) || 0
    if (options.media) {
      //console.log(options, containerWidth)
      if (containerWidth !== 0) {
        const keys =  Object.keys(options.media)
        const target = keys.find(key => window.innerWidth <= Number(key))
        if (target) {
          options = {
            ...options,
            ...options.media[target]
          }
        } else {
          options = {
            ...options,
            ...options.media[keys[keys.length - 1]]
          }
        }
        currentStep = 0
      }
    }
    //console.log('arrows', options.arrows)
  }

  // здесь эти навороты с тапом нужны так как событие клика срабатывает вместе с событием pan, а этого нам не нужно
  const tapHandle = e => setTimeout(() => dispatch('click', clickedItem))

  const itemClickHandle = data => {
    clickedItem = data
  }

  const panStartHandle = e => {
    // уменьшаем задержку анимации duration
    panActive = true
    clickedItem = null
  }

  const panEndHandle = e => {
    // увеличиваем задержку анимации duration
    panActive = false
    if (e.deltaX <= -100 && currentStep !== allSteps) {
      setStep(currentStep + 1)
      return
    }
    if (e.deltaX >= 100 && currentStep > 0) {
      setStep(currentStep - 1)
      return
    }
    // сбрасываем до первоначального состояния
    containerElem.style.transform = `translateX(${left}px)`
  }

  const setStep = stepNumber => {
    if (stepNumber >= 0 && stepNumber < items.length) {
      currentStep = stepNumber
      console.log('currentStep', currentStep)
    }
  }

  const arrowClickHandle = e => {
    const delta = e.currentTarget && e.currentTarget.classList.contains('left') ? -1 : 1
    if (!disableChangeStep) {
      disableChangeStep = true
      setStep(currentStep + delta)
    }
  }

  const checkShowArrows = () => {
    if (options.arrows) {
      showPrevArrow = currentStep !== 0
      showNextArrow = currentStep !== allSteps
      console.log(currentStep, allSteps)
    }
  }

  const setSwiperElemsWidth = () => {
    // устанавливаем карусель в позицию указанную в опциях
    // если это infinity карусель то выставляем на шаг вперед
    setStep(options.infinity ? options.step + 1 : options.step)
    // проверяем стрелки
    checkShowArrows()
  }

  const geenerateStepsGrid = () => {
    const items = containerElem && containerElem.children
    let repeat = false
    let result = {
      0: {
        translateX: 0
      }
    }
    let translateX = 0
    let step = 1
    let sumItemsWidth = 0
    let k = 1
    for (let i = 0; i < items.length; i++) {
      const swiperElem = items[i]
      const width = swiperElem && swiperElem.getBoundingClientRect().width
      if (width === 0) {
        repeat = true
        break;
      }
      const prevtranslateX = translateX
      translateX +=width + options.margin
      sumItemsWidth += width + options.margin
      k +=1
      if (translateX > containerWidth * step) {
        result[step] = {
          translateX: prevtranslateX
        }
        step +=1
        k = 1
        sumItemsWidth = width + options.margin
      }
    }
    if (repeat) {
      setTimeout(() => geenerateStepsGrid(), 100)
      return
    }
    // добавляем оставшиеся элементы в сетку они туда не попали по условие выше translateX > containerWidth * step
    step -=1
    // проверяем последние элементы на пересечение с контейнером
    // прокручивание до последнего элемента
    result[step].translateX = result[step - 1].translateX + sumItemsWidth
    // элемент на границе
    const boundaryElem = items[items.length - k]
    const bounderyElemX = boundaryElem.getBoundingClientRect().x
    debugger
    if (bounderyElemX < result[step].translateX) {
      debugger
      const delta = containerWidth - result[step].translateX
      console.log('delta', delta)
      const x0 = result[step - 1].translateX
      const x1 = boundaryElem.getBoundingClientRect().right
      console.log('x1', x1)
      result[step].translateX = x1 - containerWidth + sumItemsWidth - boundaryElem.getBoundingClientRect().width
    }
    allSteps = step
    console.log(step)
    stepsGrid = result
  }
  //
  // $: computedItems = (options.infinity && items.length &&
  // [ ...items.slice(-options.perView), ...items, ...items.slice(0, options.perView) ]) || items
  $: elemsOnStep = Math.floor(containerWidth/itemContainerWidth)
  $: stepWidth = options.perView === 'auto' ?
    itemContainerWidth && (elemsOnStep * itemContainerWidth) + elemsOnStep*options.margin :
    containerWidth
  $: itemWidth = options.perView === 'auto' ? 'auto' : (stepWidth && `${stepWidth / options.perView}`) || 0
  $: left = -(stepsGrid[currentStep] && stepsGrid[currentStep].translateX)


</script>

<style>
  .svelte-swiper {
    width: 9999px;
    height: 100%;
    display: flex;
    position: absolute;
    transition: transform 0.5s;
    transform: translateX(0);
    will-change: transform;
  }
  .svelte-swiper.panActive {
    transition: none;
  }
  .main-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .item-container {
    height: 100%;
  }
  .arrow {
    width: 40px;
    height: 40px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    cursor: pointer;

  }
  .arrow .round {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: white;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    transition: transform 0.4s;
  }
  .arrow:hover .round {
    transform: scale(1.1);
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.2);
  }
  .arrow .round, .arrow img {
    position: absolute;
  }
  .arrow.left {
    left: 10px;
  }
  .arrow.left img {
    transform: rotate(180deg);
  }
  .arrow.right {
    right: 10px;
  }

</style>

<div>left: {left}</div>
<div>stepsGrid: {JSON.stringify(stepsGrid)}</div>
<div class="main-wrapper" bind:this={wrapperElem}>
  <div
    class="svelte-swiper"
    bind:this={containerElem}
    class:panActive={panActive}
    style='transform: translateX({left}px)'
  >
    {#if items && items.length}
      {#each items as item, index}
        <div class="item-container"
          style="{itemWidth !== 'auto' ? `width: ${itemWidth}px;` : ''} margin-right: {options.margin}px"
          bind:this={itemContainerElem}
          on:mousedown={() => itemClickHandle({...item, index})}
        >
          <slot item={item} name="targetItem">
            <Image alt={item.alt} src={item.src} fixedHeight={true} />
          </slot>
        </div>
      {/each}
      {:else}
        <div>Галлерея пуста</div>
    {/if}
  </div>
  {#if options.arrows}
    {#if showPrevArrow}
      <div class="arrow left" on:click={arrowClickHandle}>
        <div class="round"></div>
        <img src="{Arrow}" alt="arrow" />
      </div>
    {/if}
    {#if showNextArrow}
      <div class="arrow right" on:click={arrowClickHandle}>
        <div class="round"></div>
        <img src="{Arrow}" alt="arrow" />
      </div>
    {/if}
  {/if}
</div>

