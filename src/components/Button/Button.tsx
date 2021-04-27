import React from 'react'
import classNames  from "classnames"
export enum ButtonSize {
  Large = "lg",
  Small = "sm"
}
export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link"
}

interface BaseButtonProps {
  className?: string,
  disabled?: boolean,
  size?: ButtonSize,
  btnType?: ButtonType,
  children: React.ReactNode,
  href?: string
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button:React.FC<ButtonProps> = (props) => {
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
    "disabled": (btnType === ButtonType.Link) && disabled
  })
  if(btnType === ButtonType.Link && href) {
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
  btnType: ButtonType.Default
}

export default Button
