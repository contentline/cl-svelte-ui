// Story about MyButton
import { storiesOf } from 'svelte3_storybook'

import {
  DefaultCustomBtn,
  RoundedCustomBtn,
  Welcome,
  DefaultSwiper
} from '../components/examples'

storiesOf('Welcome', module)
  .add('Svelte UI Library ', () => ({
    Component: Welcome
  }))
storiesOf('CustomButton', module)
  .add('rounded button', () => ({
    Component: RoundedCustomBtn,
    data: {
      rounded: true
    },
    on: {
      click: event => console.log(event)
    }
  }))
  .add('default btn', () => ({
    Component: DefaultCustomBtn,
    data: {
      rounded: false
    }
  }))

storiesOf.add('Swiper', module)
  .add('default Swiper', () => ({
    Component: DefaultSwiper
  }))
