import React, { useEffect, useMemo, useState } from "react";
import { unmountComponentAtNode } from "react-dom";
import classNames from "classnames";
import Transition from './../Transition/Transition';
import Icon from "../Icon/Icon";
var Message = function (props) {
    var _a, _b;
    var rootDom = props.rootDom, parentDom = props.parentDom, content = props.content, duration = props.duration, type = props.type;
    var _c = useState(null), timer = _c[0], setTimer = _c[1];
    var _d = useState(false), messageShow = _d[0], setShow = _d[1];
    var classes = classNames("setsail-message-context", (_a = {},
        _a["message-" + type] = type,
        _a));
    var iconClasses = classNames((_b = {},
        _b["message-icon-" + type] = type,
        _b));
    var unmount = useMemo(function () {
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }
        return function () {
            setShow(false);
            setTimeout(function () {
                if (parentDom && rootDom && rootDom.contains(parentDom)) {
                    unmountComponentAtNode(parentDom);
                    rootDom.removeChild(parentDom);
                }
            }, 400);
        };
    }, [parentDom, rootDom]);
    useEffect(function () {
        setShow(true);
        setTimer(setTimeout(function () {
            unmount();
        }, duration));
    }, [unmount, duration]);
    return (React.createElement(Transition, { in: messageShow, timeout: 300, animation: "zoom-in-top" },
        React.createElement("div", { className: classes },
            type === 'success' ?
                React.createElement(Icon, { className: iconClasses, icon: "check-circle" })
                : type === 'error' ?
                    React.createElement(Icon, { className: iconClasses, icon: "times-circle" })
                    : type === 'warning' ?
                        React.createElement(Icon, { className: iconClasses, icon: "exclamation-circle" })
                        : type === 'info' ?
                            React.createElement(Icon, { className: iconClasses, icon: "exclamation-circle" })
                            : null,
            React.createElement("div", { className: classNames("message-context") }, content),
            React.createElement("div", { className: classNames("message-close"), style: { zIndex: 102, cursor: "pointer" }, onClick: function () { unmount(); } },
                React.createElement(Icon, { icon: "times" })))));
};
Message.defaultProps = {
    type: "success",
    duration: 1500
};
export default Message;
