import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';




import {
  Welcome,
  DefaultImage,
  DefaultSwiper,
  SvelteSwiper,
  ApiSwiper,
  Select
} from '../components/examples'

// Welcome
storiesOf('Welcome', module)
  .add('Svelte UI Library ', () => ({
    Component: Welcome
  }))
storiesOf('Image', module)
  .add('default Image ', () => ({
    Component: DefaultImage
  }))
storiesOf('SvelteSwiper', module)
  .add('default Svelte Swiper', () => ({
    Component: SvelteSwiper
  }))
storiesOf('Select', module)
  .add('default Select', () => ({
    Component: Select
  }))
// Swiper
storiesOf('Swiper', module)
  .add('default Swiper', () => ({
    Component: DefaultSwiper
  }))
  .add('use api', () => ({
    Component: ApiSwiper
  }))
