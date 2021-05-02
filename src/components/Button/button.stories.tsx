import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './Button'

const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
)

const buttonWithSize = () => (
  <>
    <Button btnType="primary" size="lg"> large button </Button>
    <Button btnType="primary" size="sm"> small button </Button>
  </>
)

const buttonWithType = () => (
  <>
  <Button btnType="primary"> primary button </Button>
    <Button btnType="primary" disabled > disabled primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com" target="_break"> link button </Button>
    <Button btnType="link" disabled > disables link </Button>
  </>
)
storiesOf('Button 组件', module)
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)