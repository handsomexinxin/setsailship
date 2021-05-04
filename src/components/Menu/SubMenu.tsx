import React, { useContext, useState, FunctionComponentElement } from 'react'
import classNames from 'classnames';
import { MenuContext } from "./Menu";
import { MenuItemProps } from "./MenuItem";
import Icon from "../Icon/Icon"
import Transition from "../Transition/Transition"
export interface SubMenuProps {
  /** 当时元素index  默认为一次排列 （onSelectCallback参数传递不传递SubMenu） */
  index?: string;
  /** 此项与MenuItem不同 为二级菜单  子元素为MenuItem title为展示内容 */
  title: string;
  /** 样式类名 */
  className?: string;
}

export const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSunMenus as Array<string>
  const isOpened = (index && context.mode === "vertical") ? openedSubMenus.includes(index): false
  const [menuOpen, setOpen] = useState(isOpened)
  
  const classes = classNames(className, "menu-item submenu-item", {
    "is-active": context.index.split("-")[0] === index,
    "is-opened": menuOpen,
    "is-vertical": context.mode === "vertical"
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  // let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    // clearTimeout(timer)
    e.preventDefault()
    // timer = setTimeout(() => {
      setOpen(toggle)
    // }, 300);
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
      // <CSSTransition
      //   in={menuOpen}
      //   timeout={300} // active到down时间
      //   classNames="zoom-in-top" // 自定义名称
      //   appear // 第一次也会运行动画过程
      //   unmountOnExit //在in未false是从节点上删除此节点
      // >
      //   <ul className={subMenuClasses} >
      //     {childrenComponent}
      //   </ul>
      // </CSSTransition>
      <Transition
        in={menuOpen}
        timeout={300}
        animation="zoom-in-top"
      >
        <ul className={subMenuClasses} >
          {childrenComponent}
        </ul>
      </Transition>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents} >
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = "subMenu"

export default SubMenu;
