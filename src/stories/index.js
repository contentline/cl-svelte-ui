// Story about MyButton
import { storiesOf } from 'svelte3_storybook'

import {
  Welcome,
  DefaultSwiper,
  ApiSwiper
} from '../components/examples'

// Welcome
storiesOf('Welcome', module)
  .add('Svelte UI Library ', () => ({
    Component: Welcome
  }))
// Swiper
storiesOf('Swiper', module)
  .add('default Swiper', () => ({
    Component: DefaultSwiper
  }))
  .add('use api', () => ({
    Component: ApiSwiper
  }))
