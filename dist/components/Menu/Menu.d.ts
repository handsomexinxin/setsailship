import React from "react";
declare type MenuMode = 'horizontal' | 'vertical';
declare type SelectCallback = (selectIndex: string) => void;
export interface MenuProps {
    /**初始化默认选择 */
    defaultIndex?: string;
    /**样式类名 */
    className?: string;
    /**horizontal 横向 |  vertical 竖向*/
    mode?: MenuMode;
    /**css样式*/
    styles?: React.CSSProperties;
    /** 选择项改变之后的回调函数  包含一个参数  参数为此选择项的index  可自行设置 */
    onSelect?: SelectCallback;
    /** 此数组为二级导航展开项  可以填入默认项 */
    defaultOpenSunMenus?: string[];
}
interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSunMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
/**
 * Menu 导航菜单
 * ~~~js
 * // 这样引用
 * import { Menu } from 'setsailship'
 * ~~~
 */
declare const Menu: React.FC<MenuProps>;
export default Menu;
