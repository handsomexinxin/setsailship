import React, { createContext, useState } from "react"
import  classNames from 'classnames';
import { MenuItemProps } from "./MenuItem"
type MenuMode = 'horizontal' | 'vertical';

type SelectCallback = (selectIndex: string) => void;

export interface MenuProps {
  defaultIndex?: string,
  className?: string,
  mode?: MenuMode,
  styles?: React.CSSProperties,
  onSelect?: SelectCallback,
  defaultOpenSunMenus?: string[]
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSunMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({index: "0"})

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
