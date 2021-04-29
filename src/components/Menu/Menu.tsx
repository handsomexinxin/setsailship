import React, { createContext, useState } from "react"
import  classNames from 'classnames';

type MenuMode = 'horizontal' | 'vertical';

type SelectCallback = (selectIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number,
  className?: string,
  mode?: MenuMode,
  styles?: React.CSSProperties,
  onSelect?: SelectCallback
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, styles, onSelect, children } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('setsail-menu', className, {
    'menu-vertical': mode === 'vertical'
  })
  
  const handleClick = (index: number) => {
    setActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }
  
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive: 0,
    onSelect: handleClick
  }
  return(
    <ul className={classes} style={styles} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal"
}

export default Menu;
