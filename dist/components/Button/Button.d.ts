import { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
export declare type ButtonSize = "lg" | "sm";
export declare type ButtonType = "primary" | "default" | "danger" | "link";
interface BaseButtonProps {
    /**设置Button的样式名 */
    className?: string;
    /**设置Button是否禁用 */
    disabled?: boolean;
    /**设置Button的大小 */
    size?: ButtonSize;
    /**设置Button的类型 */
    btnType?: ButtonType;
    /**设置Button的子元素  在双标签中写入 */
    children: ReactNode;
    /**如果类型为link设置链接地址 */
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * Button 按钮
 * ~~~js
 * // 这样引用
 * import { Button } from 'setsailship'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
export declare const Button: FC<ButtonProps>;
export default Button;
