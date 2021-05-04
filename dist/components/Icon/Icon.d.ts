import React from "react";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}
/**
 * icon 图标 封装fortawesome而来 包含Free下 Solid
 * ~~~js
 * // 这样引用
 * import { icon } from 'setsailship'
 * ~~~

 */
export declare const Icon: React.FC<IconProps>;
export default Icon;
