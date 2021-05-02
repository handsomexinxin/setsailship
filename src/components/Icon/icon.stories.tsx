import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from "../Icon/Icon";
const defaultInput = () => (
  <>
    <p>
      <code>
        须传入icon icon对应 Free下 Solid 
        图标库亦是
        未展示参数对应参数对用FontAwesomeIconProps
      </code>
    </p>
    <Icon icon="align-right" theme="primary" size="2x" style={{marginRight: "10px"}} />
    <Icon icon="address-card" theme="danger" size="2x" style={{marginRight: "10px"}} />
    <Icon icon="address-card" theme="dark" size="2x" style={{marginRight: "10px"}} />
    <Icon icon="address-card" theme="info" size="2x" style={{marginRight: "10px"}} />
    <Icon icon="address-card" theme="light" size="2x" style={{marginRight: "10px"}} />
    <Icon icon="address-card" theme="secondary" size="2x" style={{marginRight: "10px"}} />
    <Icon icon="address-card" theme="success" size="2x" style={{marginRight: "10px"}} />
    <Icon icon="address-card" theme="warning" size="2x" style={{marginRight: "10px"}} />

  </>
)


storiesOf('icon 组件', module)
  .add('Icon', defaultInput)