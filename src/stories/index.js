import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';




import {
  Welcome,
  DefaultImage,
  DefaultSwiper,
  SvelteSwiper,
  ApiSwiper,
  GallerySwiper,
  Select,
  VerticalSlider,
  CustomScrollBar
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
storiesOf('Select', module)
  .add('default Select', () => ({
    Component: Select
  }))
storiesOf('VerticalSlider', module)
  .add('default VerticalSlider', () => ({
    Component: VerticalSlider
  }))
storiesOf('CustomScrollBar', module)
  .add('default CustomScrollBar', () => ({
    Component: CustomScrollBar
  }))
// Swiper
storiesOf('Swiper', module)
  .add('default Swiper', () => ({
    Component: DefaultSwiper
  }))
  .add('use api', () => ({
    Component: ApiSwiper
  }))
  .add('use gallery', () => ({
    Component: GallerySwiper
  }))
