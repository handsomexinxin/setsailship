import React from "react"
import { render, RenderResult, fireEvent, cleanup } from "@testing-library/react"
import Menu, { MenuProps } from "./Menu"
import MenuItem from "./MenuItem"
import SubMenu from "./SubMenu"

const testProps: MenuProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: 'test'
}
const testVerProps: MenuProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  mode: "vertical"
}
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem >
        active
    </MenuItem>
      <MenuItem disabled>
        disabled
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
        xyz
    </MenuItem>
    </Menu>
  )
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement

describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    menuElement = wrapper.getByTestId("test-menu")
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('setsail-menu test')
    // expect(menuElement.getElementsByTagName("li").length).toEqual(3) //不分层级
    expect(menuElement.querySelectorAll(":scope > li").length).toEqual(4)
    expect(activeElement).toHaveClass("menu-item is-active")
    expect(disabledElement).toHaveClass("menu-item is-disabled")

  })
  it('click item should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText("xyz")
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass("is-active")
    expect(activeElement).not.toHaveClass("is-active")
    expect(testProps.onSelect).toHaveBeenCalledWith('3')
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass("is-active")
    expect(testProps.onSelect).not.toHaveBeenLastCalledWith(1)
  })
  it('should render vertical mode when mode is set to vertical', () => {
    cleanup()
    const wrapper = render(generateMenu(testVerProps))
    const menuElement = wrapper.getByTestId("test-menu")
    expect(menuElement).toHaveClass('menu-vertical')
  })
})
