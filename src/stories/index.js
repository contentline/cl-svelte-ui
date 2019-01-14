// Story about MyButton
import { storiesOf } from 'svelte3_storybook'

import DefaultCustomBtn from '../components/examples/CustomBtnExample/Default.html'
import RoundedCustomBtn from '../components/examples/CustomBtnExample/Rounded.html'

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
