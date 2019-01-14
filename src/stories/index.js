// Story about MyButton
import { storiesOf } from 'svelte3_storybook'

import {
  DefaultCustomBtn,
  RoundedCustomBtn
} from '../components'

storiesOf('CustomButton', module).add('rounded button', () => ({
  Component: RoundedCustomBtn,
  data: {
    rounded: true
  },
  on: {
    click: event => console.log(event)
  }

})).add('default btn', () => ({
  Component: DefaultCustomBtn,
  data: {
    rounded: false
  }
}))
