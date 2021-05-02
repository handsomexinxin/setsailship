import React, {useState} from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../Button/Button'
import Transition from './Transition';
export const MessageComponent = () => {
  const [ show, setShow] = useState(true)
  return (
    <div>
      <h5>Message组件</h5>
      <Button onClick={() => setShow(!show)} >Toggle</Button>
      <Transition
        timeout={300}
        in={show}
        animation="zoom-in-left"
      >
        <div>
          <p>
            <code>
            此库在react-transition-group上进行二次封住,所以timeout必须传入  为动画超时时间
          </code>
          </p>
          <p>
            <code>
            此库在react-transition-group上进行二次封住,所以timeout必须传入  为动画超时时间
          </code>
          </p>
          <p>
            <code>
              此库在react-transition-group上进行二次封住,所以timeout必须传入  为动画超时时间
          </code>
          </p>
        </div>
      </Transition>
    </div>
  )
}

storiesOf('Transition 组件', module)
  .add('Transition', MessageComponent)