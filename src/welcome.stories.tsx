import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 setasilship 组件库</h1>
        <p>setasilship 是为慕课网课程打造的一套教学组件库，从零到一让大家去学习</p>
        <h3>安装试试</h3>
        <code>
          npm install setasilship --save
        </code>
      </>
    )
  }, { info : { disable: true }})