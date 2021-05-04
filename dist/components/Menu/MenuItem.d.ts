import React from "react";
export interface MenuItemProps {
    /** 当时元素index  默认为一次排列 （onSelectCallback参数） */
    index?: string;
    /** 是否禁用此项 */
    disabled?: boolean;
    /** 样式类名 */
    className?: string;
    /** css样式 */
    styles?: React.CSSProperties;
}
export declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
