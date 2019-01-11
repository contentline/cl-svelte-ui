// Story about MyButton
import { storiesOf } from 'svelte3_storybook'

import MyButton from '../components/MyButton.svelte'
storiesOf('MyButton', module).add('simple component example', () => ({
  Component: MyButton,
  data: {
    buttonText: 'Custom Text',
    rounded: true
  },
  on: {
    click: event => console.log(event)
  }

}))
