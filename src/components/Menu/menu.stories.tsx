import React from 'react'
import { storiesOf } from '@storybook/react'
// import Menu from './Menu'
// import MenuItem from './MenuItem'
// import SubMenu from './SubMenu'
import Menu from './index'

export const defaultMenu = () => (
  <div>
    <h5>横向Menu组件</h5>
    <Menu defaultIndex={"0"} >
      <Menu.Item >
        cool link
          </Menu.Item>
      <Menu.Item disabled >
        cool link 2
          </Menu.Item>
      <Menu.SubMenu title="dropdown" >
        <Menu.Item >
          dropdown 1
          </Menu.Item>
        <Menu.Item >
          dropdown 2
          </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item >
        cool link 3
          </Menu.Item>
    </Menu>
  </div>
)
export const verticalMenu = () => (
  <div>
    <h5>竖向Menu组件</h5>
    <Menu defaultIndex={"0"} onSelect={(index) => { console.log(index) }} mode="vertical" defaultOpenSunMenus={["2"]} >
      <Menu.Item >
        cool link
          </Menu.Item>
      <Menu.Item disabled >
        cool link 2
          </Menu.Item>
      <Menu.SubMenu title="dropdown" >
        <Menu.Item >
          dropdown 1
          </Menu.Item>
        <Menu.Item >
          dropdown 2
          </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item >
        cool link 3
          </Menu.Item>
    </Menu>
  </div>
)

storiesOf('Menu 组件', module)
  .add('Menu', defaultMenu)
  .add("Menu 竖向", verticalMenu)