import React, {useContext} from "react"
import classNames from 'classnames';
import {MenuContext} from "./Menu"
export interface MenuItemProps {
  /** 当时元素index  默认为一次排列 （onSelectCallback参数） */
  index?: string,
  /** 是否禁用此项 */
  disabled?: boolean,
  /** 样式类名 */
  className?: string,
  /** css样式 */
  styles?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, styles, children } = props

  const context = useContext(MenuContext)

  const classes = classNames('menu-item', className, {
    "is-disabled": disabled,
    "is-active": index === context.index
  })
  const handleClick = () => {
    if(context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={styles} onClick={handleClick} >
      {children}
    </li>
  )
}

MenuItem.displayName = "menuItem"

export default MenuItem;
