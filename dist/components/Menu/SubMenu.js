var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from "./Menu";
import Icon from "../Icon/Icon";
import Transition from "../Transition/Transition";
export var SubMenu = function (props) {
    var index = props.index, title = props.title, className = props.className, children = props.children;
    var context = useContext(MenuContext);
    var openedSubMenus = context.defaultOpenSunMenus;
    var isOpened = (index && context.mode === "vertical") ? openedSubMenus.includes(index) : false;
    var _a = useState(isOpened), menuOpen = _a[0], setOpen = _a[1];
    var classes = classNames(className, "menu-item submenu-item", {
        "is-active": context.index.split("-")[0] === index,
        "is-opened": menuOpen,
        "is-vertical": context.mode === "vertical"
    });
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    // let timer: any;
    var handleMouse = function (e, toggle) {
        // clearTimeout(timer)
        e.preventDefault();
        // timer = setTimeout(() => {
        setOpen(toggle);
        // }, 300);
    };
    var clickEvents = context.mode === "vertical" ? {
        onClick: handleClick
    } : {};
    var hoverEvents = context.mode !== "vertical" ? {
        onMouseEnter: function (e) { handleMouse(e, true); },
        onMouseLeave: function (e) { handleMouse(e, false); }
    } : {};
    var renderChildren = function () {
        var subMenuClasses = classNames("setsail-submenu", {
            'menu-opened': menuOpen
        });
        var childrenComponent = React.Children.map(children, function (child, i) {
            var childElement = child;
            // if (childElement.type.displayName === "menuItem") {
            return React.cloneElement(childElement, {
                index: index + "-" + i
            });
            // } else {
            //   console.error("error: Menu has a child which is not a MenuItem Component");
            // }
        });
        return (
        // <CSSTransition
        //   in={menuOpen}
        //   timeout={300} // active到down时间
        //   classNames="zoom-in-top" // 自定义名称
        //   appear // 第一次也会运行动画过程
        //   unmountOnExit //在in未false是从节点上删除此节点
        // >
        //   <ul className={subMenuClasses} >
        //     {childrenComponent}
        //   </ul>
        // </CSSTransition>
        React.createElement(Transition, { in: menuOpen, timeout: 300, animation: "zoom-in-top" },
            React.createElement("ul", { className: subMenuClasses }, childrenComponent)));
    };
    return (React.createElement("li", __assign({ key: index, className: classes }, hoverEvents),
        React.createElement("div", __assign({ className: "submenu-title" }, clickEvents),
            title,
            React.createElement(Icon, { icon: "angle-down", className: "arrow-icon" })),
        renderChildren()));
};
SubMenu.displayName = "subMenu";
export default SubMenu;
