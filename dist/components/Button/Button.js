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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from "classnames";
/**
 * Button 按钮
 * ~~~js
 * // 这样引用
 * import { Button } from 'setsailship'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
export var Button = function (props) {
    var _a;
    var btnType = props.btnType, className = props.className, size = props.size, disabled = props.disabled, children = props.children, href = props.href, restProps = __rest(props, ["btnType", "className", "size", "disabled", "children", "href"]);
    var classes = classNames("btn", className, (_a = {},
        _a["btn-" + btnType] = btnType,
        _a["btn-" + size] = size,
        _a["btn-" + className] = className,
        _a["disabled"] = (btnType === "link") && disabled,
        _a));
    if (btnType === "link" && href) {
        return (React.createElement("a", __assign({}, restProps, { className: classes, href: href }), children));
    }
    else {
        return (React.createElement("button", __assign({}, restProps, { className: classes, disabled: disabled }), children));
    }
};
Button.defaultProps = {
    disabled: false,
    btnType: "default"
};
export default Button;
