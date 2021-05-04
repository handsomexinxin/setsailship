import React, { createContext, useState } from "react";
import classNames from 'classnames';
export var MenuContext = createContext({ index: "0" });
/**
 * Menu 导航菜单
 * ~~~js
 * // 这样引用
 * import { Menu } from 'setsailship'
 * ~~~
 */
var Menu = function (props) {
    var defaultIndex = props.defaultIndex, className = props.className, mode = props.mode, styles = props.styles, onSelect = props.onSelect, children = props.children, defaultOpenSunMenus = props.defaultOpenSunMenus;
    var _a = useState(defaultIndex), currentActive = _a[0], setActive = _a[1];
    var classes = classNames('setsail-menu', className, {
        'menu-vertical': mode === 'vertical',
        "menu-horizontal": mode !== "vertical"
    });
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : "0",
        onSelect: handleClick,
        mode: mode,
        defaultOpenSunMenus: defaultOpenSunMenus
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            // if( displayName === "menuItem" || displayName === "subMenu") {
            return React.cloneElement(childElement, {
                index: index.toString()
            });
            // }else {
            //   console.error("error: Menu has a child which is not a MenuItem Component");
            // }
        });
    };
    return (React.createElement("ul", { className: classes, style: styles, "data-testid": "test-menu" },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
Menu.defaultProps = {
    defaultIndex: "0",
    mode: "horizontal",
    defaultOpenSunMenus: []
};
export default Menu;
