import React, {useContext} from "react"
import classNames from 'classnames';
import {MenuContext} from "./Menu"
export interface MenuItemProps {
  index?: string,
  disabled?: boolean,
  className?: string,
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
