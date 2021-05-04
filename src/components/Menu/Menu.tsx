import React, { createContext, useState } from "react"
import  classNames from 'classnames';
import { MenuItemProps } from "./MenuItem"
type MenuMode = 'horizontal' | 'vertical';

type SelectCallback = (selectIndex: string) => void;

export interface MenuProps {
  /**初始化默认选择 */
  defaultIndex?: string,
  /**样式类名 */
  className?: string,
  /**horizontal 横向 |  vertical 竖向*/
  mode?: MenuMode,
  /**css样式*/
  styles?: React.CSSProperties,
  /** 选择项改变之后的回调函数  包含一个参数  参数为此选择项的index  可自行设置 */
  onSelect?: SelectCallback,
  /** 此数组为二级导航展开项  可以填入默认项 */
  defaultOpenSunMenus?: string[]
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSunMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({index: "0"})
/**
 * Menu 导航菜单
 * ~~~js
 * // 这样引用
 * import { Menu } from 'setsailship'
 * ~~~
 */
const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, styles, onSelect, children, defaultOpenSunMenus } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('setsail-menu', className, {
    'menu-vertical': mode === 'vertical',
    "menu-horizontal": mode !== "vertical"
  })
  
  const handleClick = (index: string) => {
    setActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }
  
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive: "0",
    onSelect: handleClick,
    mode,
    defaultOpenSunMenus
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const {displayName} = childElement.type;
      if( displayName === "menuItem" || displayName === "subMenu") {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      }else {
        console.error("error: Menu has a child which is not a MenuItem Component");
        
      }
    })
  }

  return(
    <ul className={classes} style={styles} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSunMenus: []
}

export default Menu;
