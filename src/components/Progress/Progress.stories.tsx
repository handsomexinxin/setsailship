import React, {useState} from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Progress from "./Progress"
export const ProgressComponent = () => {
  return (
    <div>
      <h5>Progress组件</h5>
      <Progress percent={20}  />
      <Progress percent={53} styles={{marginTop: "10px"}} theme="danger" />
      <Progress percent={99} styles={{marginTop: "10px"}} theme="dark" />
      <Progress percent={12} styles={{marginTop: "10px"}} theme="info" />
      <Progress percent={34} styles={{marginTop: "10px"}} theme="light"  />
      <Progress percent={43} styles={{marginTop: "10px"}} theme="secondary" />
      <Progress percent={64} styles={{marginTop: "10px"}} theme="success" />
      <Progress percent={90} styles={{marginTop: "10px"}} theme="warning" />

      <Progress percent={20} showText={false} />

    </div>
  )
}

storiesOf('Progress 组件', module)
  .add('Progress', ProgressComponent)