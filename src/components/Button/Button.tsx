import React, {FC,ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode} from 'react'
import classNames  from "classnames"
// export enum ButtonSize {
//   Large = "lg",
//   Small = "sm"
// }
// export enum ButtonType {
//   Primary = "primary",
//   Default = "default",
//   Danger = "danger",
//   Link = "link"
// }
export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
  /**设置Button的样式名 */
  className?: string,
  /**设置Button是否禁用 */
  disabled?: boolean,
  /**设置Button的大小 */
  size?: ButtonSize,
  /**设置Button的类型 */
  btnType?: ButtonType,
  /**设置Button的子元素  在双标签中写入 */
  children: ReactNode,
  /**如果类型为link设置链接地址 */
  href?: string
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
/**
 * Button 按钮 
 * ~~~js
 * // 这样引用
 * import { Button } from 'setsailship'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
export const Button:FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    size,
    disabled,
    children,
    href,
    ...restProps
  } = props
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    [`btn-${className}`]: className,
    "disabled": (btnType === "link") && disabled
  })
  if(btnType === "link" && href) {
    return (
      <a {...restProps} className={classes} href={href}>{children}</a>
    )
  }else {
    return (
      <button {...restProps} className={classes} disabled={disabled}>{children}</button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: "default"
}

export default Button;
