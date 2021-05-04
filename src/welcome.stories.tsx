import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 setasilship 组件库</h1>
        <p>setasilship 是一个个人学习开发的组件库。</p>
        <h3>欢迎安装</h3>
        <code>
          npm install setasilship --save
        </code>
      </>
    )
  }, { info : { disable: true }})