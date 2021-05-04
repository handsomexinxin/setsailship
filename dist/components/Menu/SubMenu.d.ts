import React from 'react';
export interface SubMenuProps {
    /** 当时元素index  默认为一次排列 （onSelectCallback参数传递不传递SubMenu） */
    index?: string;
    /** 此项与MenuItem不同 为二级菜单  子元素为MenuItem title为展示内容 */
    title: string;
    /** 样式类名 */
    className?: string;
}
export declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
