import React, { useContext, useState, FunctionComponentElement } from 'react'
import classNames from 'classnames';
import { MenuContext } from "./Menu";
import { MenuItemProps } from "./MenuItem";
export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSunMenus as Array<string>
  const isOpened = (index && context.mode == "vertical") ? openedSubMenus.includes(index): false
  const [menuOpen, setOpen] = useState(isOpened)
  
  const classes = classNames(className, "menu-item submenu-item", {
    "is-active": context.index.split("-")[0] == index
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300);
  }

  const clickEvents = context.mode === "vertical" ? {
    onClick: handleClick
  }: {}
  const hoverEvents = context.mode !== "vertical" ? {
    onMouseEnter: (e: React.MouseEvent) => {handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => {handleMouse(e, false)}
  }: {}
  const renderChildren = () => {
    const subMenuClasses = classNames("setsail-submenu", {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === "menuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.error("error: Menu has a child which is not a MenuItem Component");
      }
    })
    return (
      <ul className={subMenuClasses} >
        {childrenComponent}
      </ul>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents} >
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = "subMenu"

export default SubMenu;
