import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './Menu'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'

export const defaultMenu = () => (
  <div>
    <h5>横向Menu组件</h5>
    <Menu defaultIndex={"0"} >
      <MenuItem >
        cool link
          </MenuItem>
      <MenuItem disabled >
        cool link 2
          </MenuItem>
      <SubMenu title="dropdown" >
        <MenuItem >
          dropdown 1
          </MenuItem>
        <MenuItem >
          dropdown 2
          </MenuItem>
      </SubMenu>
      <MenuItem >
        cool link 3
          </MenuItem>
    </Menu>
  </div>
)
export const verticalMenu = () => (
  <div>
    <h5>竖向Menu组件</h5>
    <Menu defaultIndex={"0"} onSelect={(index) => { console.log(index) }} mode="vertical" defaultOpenSunMenus={["2"]} >
      <MenuItem >
        cool link
          </MenuItem>
      <MenuItem disabled >
        cool link 2
          </MenuItem>
      <SubMenu title="dropdown" >
        <MenuItem >
          dropdown 1
          </MenuItem>
        <MenuItem >
          dropdown 2
          </MenuItem>
      </SubMenu>
      <MenuItem >
        cool link 3
          </MenuItem>
    </Menu>
  </div>
)

storiesOf('Menu 组件', module)
  .add('Menu', defaultMenu)
  .add("Menu 竖向", verticalMenu)