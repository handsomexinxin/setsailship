import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import message from './Message'
import Button from '../Button/Button'

export const MessageComponent = () => (
  <div>
    <h5>Message组件</h5>
    <Button onClick={(e) => { message({ content: "successMessage被调用", type: "success" }) }} >默认的message</Button>
    <Button btnType="primary" style={{ marginLeft: "10px" }} onClick={(e) => { message({ content: "successMessage被调用", type: "success" }) }} >success</Button>
    <Button btnType="primary" style={{ marginLeft: "10px" }} onClick={(e) => { message({ content: "errorMessage被调用", type: "error" }) }} >error</Button>
    <Button btnType="primary" style={{ marginLeft: "10px" }} onClick={(e) => { message({ content: "warningMessage被调用", type: "warning" }) }} >warning</Button>
    <Button btnType="primary" style={{ marginLeft: "10px" }} onClick={(e) => { message({ content: "infoMessage被调用我有key", key: "123", type: "info" }) }} >有key的info</Button>
    <Button btnType="primary" style={{ marginLeft: "10px" }} onClick={(e) => { message({ content: "infoMessage被调用我有key", key: "23", type: "error" }) }} >有key的error</Button>
    <Button btnType="primary" style={{ marginLeft: "10px" }} onClick={(e) => { message({ content: "infoMessage被调用不仅有key 还可以通过duration来设置持续时间接受一个整数", key: "we", type: "info", duration: 15000 }) }} >有key的info</Button>
    <br />
    <code>
      默认持续时间为1500 <br/>
      默认的type为success <br/>
      content为展示内容  *  <br/>
      key值默认无   传入key可以保证此message的唯一性
    </code>
  </div>
)

storiesOf('Message 组件', module)
  .add('Message', MessageComponent)