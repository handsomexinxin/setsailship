import React from "react"
import classNames from "classnames"
import  { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}
/**
 * icon 图标 封装fortawesome而来 包含Free下 Solid
 * ~~~js
 * // 这样引用
 * import { icon } from 'setsailship'
 * ~~~

 */
export const Icon:React.FC<IconProps> = (props) => {
  const { theme, className, ...restProps } = props
  const classes = classNames('setsail-icon', className, {
    [`icon-${theme}`]: theme
  })
  return <FontAwesomeIcon className={classes} {...restProps}></FontAwesomeIcon>
}

export default Icon;